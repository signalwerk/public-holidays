import fs from "fs";
import yaml from "js-yaml";
import moment from "moment";
import { v5 as uuidv5 } from "uuid";
import { easterDate } from "./easterDate.js";
import { relativeDate } from "./relativeDate.js";

import { Component, Property } from "immutable-ics";
const UUID_NAMESPACE = "e17cad84-92a3-11ec-b909-0242ac120002";

const now = new moment();

class PublicHoliday {
  constructor(year) {
    this.year = year || now.year();
    this.events = [];
    this.rules = [];
  }

  setYear(year) {
    this.year = year || now.year();
  }

  // get yml data
  loader(path) {
    try {
      return yaml.safeLoad(fs.readFileSync(path, "utf8"));
    } catch (e) {
      console.log(e);
    }
  }

  // add events based on a yaml
  addRule(path) {
    let data = this.loader(path);
    this.rules.push(data);
  }

  generateFromRule(lang) {
    this.rules.forEach((rule) => {
      this.process(rule, lang);
    });
  }

  // process each week
  process(data, lang) {
    let date;

    switch (data.start.type) {
      case "date":
        date = moment.utc({
          year: data.start.year || this.year,
          month: data.start.month - 1,
          day: data.start.day,
        });
        break;

      case "easter":
        // code block
        let easter = easterDate(this.year);
        date = moment.utc({
          year: easter.year,
          month: easter.month - 1,
          day: easter.day,
        });
        break;

      case "weekday":
        date = relativeDate(
          this.year,
          data.start.month,
          data.start.day,
          data.start.weekday
        );
        break;
      default:
        throw "wrong type: " + data.start.type;
    }

    if (data.math) {
      date.add(data.math.months || 0, "months");
      date.add(data.math.weeks || 0, "weeks");
      date.add(data.math.days || 0, "days");
    }

    this.events.push({
      title: data.name[lang],
      date,
    });
  }

  // generate the icsEvent
  icsEvent(data) {
    var properties = [
      new Property({
        name: "UID",
        value: uuidv5(JSON.stringify(data), UUID_NAMESPACE),
      }),
      new Property({
        name: "DTSTAMP",
        value: data.date.toDate(), // keep stable
        parameters: {
          // VALUE: 'DATE-TIME',
          // TZID: 'Europe/Zurich',
        },
      }),
      new Property({
        name: "SUMMARY",
        value: data.title,
      }),
      new Property({
        name: "DTSTART",
        value: data.date.toDate(),
        parameters: {
          VALUE: "DATE",
          // TZID: 'Europe/Zurich',
        },
      }),
      new Property({
        name: "DTEND",
        value: data.date.add(1, "d").toDate(),
        parameters: {
          VALUE: "DATE",
          // TZID: 'Europe/Zurich',
        },
      }),
    ];

    var event = new Component({
      name: "VEVENT",
      properties,
    });

    return event;
  }

  // generate the ics
  ics(path) {
    var events = [];

    this.events.forEach((value) => {
      events.push(this.icsEvent(value));
    });

    const calendar = new Component({
      name: "VCALENDAR",
      components: events,
      properties: [
        new Property({
          name: "VERSION",
          value: 2,
        }),
        new Property({
          name: "PRODID",
          value: "PublicHoliday",
        }),
      ],
    });

    let out = calendar.toString();
    fs.writeFileSync(path, out);
    console.log("ics written to " + path);
  }
}

console.log("-- start ics generation --");
let ics = new PublicHoliday();

ics.addRule("./src/rules/easterRelative/RoseMonday.yaml");
ics.addRule("./src/rules/easterRelative/ShroveTuesday.yaml");
ics.addRule("./src/rules/easterRelative/AshWednesday.yaml");
ics.addRule("./src/rules/easterRelative/MaundyThursday.yaml");
ics.addRule("./src/rules/easterRelative/GoodFriday.yaml");
ics.addRule("./src/rules/easterRelative/EasterDay.yaml");
ics.addRule("./src/rules/easterRelative/EasterMonday.yaml");
ics.addRule("./src/rules/easterRelative/Ascension.yaml");
ics.addRule("./src/rules/easterRelative/Whitsunday.yaml");
ics.addRule("./src/rules/easterRelative/Whitmonday.yaml");
ics.addRule("./src/rules/easterRelative/CorpusChristi.yaml");

ics.addRule("./src/rules/absolute/AllHallows.yaml");
ics.addRule("./src/rules/absolute/AssumptionofMary.yaml");
ics.addRule("./src/rules/absolute/Berchtoldstag.yaml");
ics.addRule("./src/rules/absolute/BoxingDay.yaml");
ics.addRule("./src/rules/absolute/ChristmasDay.yaml");
ics.addRule("./src/rules/absolute/ChristmasEve.yaml");
ics.addRule("./src/rules/absolute/Epiphany.yaml");
ics.addRule("./src/rules/absolute/GermanUnityDay.yaml");
ics.addRule("./src/rules/absolute/LabourDay.yaml");
ics.addRule("./src/rules/absolute/NewYearsDay.yaml");
ics.addRule("./src/rules/absolute/NewYearsEve.yaml");
ics.addRule("./src/rules/absolute/Halloween.yaml");
ics.addRule("./src/rules/absolute/SwissNationalDay.yaml");
ics.addRule("./src/rules/absolute/ValentinesDay.yaml");

ics.addRule("./src/rules/relative/MothersDay.yaml");
ics.addRule("./src/rules/relative/Advent1.yaml");
ics.addRule("./src/rules/relative/Advent2.yaml");
ics.addRule("./src/rules/relative/Advent3.yaml");
ics.addRule("./src/rules/relative/Advent4.yaml");
ics.addRule("./src/rules/relative/PrayerofRepentanceCH.yaml");
ics.addRule("./src/rules/relative/PrayerofRepentance.yaml");

for (var y = now.year() - 4; y <= now.year() + 4; y++) {
  console.log("ADD: " + y);
  ics.setYear(y);
  ics.generateFromRule("DE-DE");
}

fs.mkdirSync("./dist", { recursive: true });

ics.ics("./dist/all.ics");
console.log("-- end ics generation --");
