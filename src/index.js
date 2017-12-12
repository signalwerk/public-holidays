import fs from 'fs';
import yaml from 'js-yaml';
import moment from 'moment';
import uuid from 'uuid';
import { easterDate } from './easterDate'

import {
  Component,
  Property
} from 'immutable-ics'




const now = new moment();




class PublicHoliday {

  constructor(year) {
    this.year = year || now.year();
    this.events = [];
  }

  // get yml data
  loader(path) {
    try {
      return yaml.safeLoad(fs.readFileSync(path, 'utf8'));
    } catch (e) {
      console.log(e);
    }
  }

  // add events based on a yaml
  add(path, lang) {
    let data = this.loader(path)
    this.process(data, lang)
  }


  // process each week
  process(data, lang) {

    let date;

    switch(data.start.type) {
      case 'date':
        date = moment.utc({ year: this.year, month: data.start.month - 1, day: data.start.day})
        break;
      case 'easter':
        // code block
        let easter = easterDate(this.year);

        date = moment.utc({
          year: easter.year,
          month: easter.month - 1,
          day: easter.day
        })

        break;
      default:
        throw "wrong type: " + data.start.type;
    }

    if(data.math) {
      date.add(data.math.months || 0, 'months');
      date.add(data.math.weeks || 0, 'weeks');
      date.add(data.math.days || 0, 'days');
    }

    this.events.push({
      title: data.name[lang],
      date,
    })
  }

  // generate the icsEvent
  icsEvent(data) {

    var properties = [
      new Property({
        name: 'UID',
        value: uuid.v1()
      }),
      new Property({
        name: 'DTSTAMP',
        value: now.toDate(),
        parameters: {
          // VALUE: 'DATE-TIME',
          // TZID: 'Europe/Zurich',
        }
      }),
      new Property({
        name: 'SUMMARY',
        value: data.title,
      }),
      new Property({
        name: 'DTSTART',
        value: data.date.toDate(),
        parameters: {
          VALUE: 'DATE',
          // TZID: 'Europe/Zurich',
        }
      }),
      new Property({
        name: 'DTEND',
        value: data.date.add(1, 'd').toDate(),
        parameters: {
          VALUE: 'DATE',
          // TZID: 'Europe/Zurich',
        }
      }),
    ]


    var event = new Component({
      name: 'VEVENT',
      properties
    });

    return event;
  }

  // generate the ics
  ics(path) {
    var events = [];

    this.events.forEach((value) => {
      events.push(this.icsEvent(value))
    });

    const calendar = new Component({
      name: 'VCALENDAR',
      components: events,
      properties: [
        new Property({
          name: 'VERSION',
          value: 2
        }),
        new Property({
          name: 'PRODID',
          value: 'PublicHoliday'
        })
      ]
    })

    let out = calendar.toString();
    fs.writeFileSync(path, out);
    console.log('ics written to ' + path);
  }
}



console.log('-- start ics generation --');
let ics = new PublicHoliday(2018);
ics.add('./src/rules/NewYearsDay.yaml', "DE-DE");


ics.add('./src/rules/easterRelative/RoseMonday.yaml', "DE-DE");
ics.add('./src/rules/easterRelative/ShroveTuesday.yaml', "DE-DE");
ics.add('./src/rules/easterRelative/AshWednesday.yaml', "DE-DE");
ics.add('./src/rules/easterRelative/MaundyThursday.yaml', "DE-DE");
ics.add('./src/rules/easterRelative/GoodFriday.yaml', "DE-DE");
ics.add('./src/rules/easterRelative/EasterDay.yaml', "DE-DE");
ics.add('./src/rules/easterRelative/EasterMonday.yaml', "DE-DE");
ics.add('./src/rules/easterRelative/Ascension.yaml', "DE-DE");
ics.add('./src/rules/easterRelative/Whitsunday.yaml', "DE-DE");
ics.add('./src/rules/easterRelative/Whitmonday.yaml', "DE-DE");
ics.add('./src/rules/easterRelative/CorpusChristi.yaml', "DE-DE");

// ics.add('./src/data/IAD2017/semester2017HS.yaml');
// ics.add('./src/data/IAD2017/semester2018FS.yaml');
ics.ics('./public/all.ics');
console.log('-- end ics generation --');
