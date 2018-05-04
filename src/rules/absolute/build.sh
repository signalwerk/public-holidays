cp template.yaml NewYearsDay.yaml
cp template.yaml Berchtoldstag.yaml
cp template.yaml Epiphany.yaml
cp template.yaml LabourDay.yaml
cp template.yaml GermanUnityDay.yaml
cp template.yaml ChristmasEve.yaml
cp template.yaml ChristmasDay.yaml
cp template.yaml BoxingDay.yaml
cp template.yaml NewYearsEve.yaml
cp template.yaml AssumptionofMary.yaml
cp template.yaml ReformationDay.yaml
cp template.yaml AllHallows.yaml
cp template.yaml SwissNationalDay.yaml


perl -pi -e 's/--month--/1/' NewYearsDay.yaml
perl -pi -e 's/--month--/1/' Berchtoldstag.yaml
perl -pi -e 's/--month--/1/' Epiphany.yaml
perl -pi -e 's/--month--/5/' LabourDay.yaml
perl -pi -e 's/--month--/10/' GermanUnityDay.yaml
perl -pi -e 's/--month--/12/' ChristmasEve.yaml
perl -pi -e 's/--month--/12/' ChristmasDay.yaml
perl -pi -e 's/--month--/12/' BoxingDay.yaml
perl -pi -e 's/--month--/12/' NewYearsEve.yaml
perl -pi -e 's/--month--/8/' AssumptionofMary.yaml
perl -pi -e 's/--month--/10/' ReformationDay.yaml
perl -pi -e 's/--month--/11/' AllHallows.yaml
perl -pi -e 's/--month--/8/' SwissNationalDay.yaml


perl -pi -e 's/--day--/1/' NewYearsDay.yaml
perl -pi -e 's/--day--/2/' Berchtoldstag.yaml
perl -pi -e 's/--day--/6/' Epiphany.yaml
perl -pi -e 's/--day--/1/' LabourDay.yaml
perl -pi -e 's/--day--/3/' GermanUnityDay.yaml
perl -pi -e 's/--day--/24/' ChristmasEve.yaml
perl -pi -e 's/--day--/25/' ChristmasDay.yaml
perl -pi -e 's/--day--/26/' BoxingDay.yaml
perl -pi -e 's/--day--/31/' NewYearsEve.yaml
perl -pi -e 's/--day--/15/' AssumptionofMary.yaml
perl -pi -e 's/--day--/31/' ReformationDay.yaml
perl -pi -e 's/--day--/1/' AllHallows.yaml
perl -pi -e 's/--day--/1/' SwissNationalDay.yaml












perl -pi -e 's/--dayDE--/Neujahrstag/' NewYearsDay.yaml
perl -pi -e 's/--dayDE--/Berchtoldstag/' Berchtoldstag.yaml
perl -pi -e 's/--dayDE--/Heilige Drei Könige/' Epiphany.yaml
perl -pi -e 's/--dayDE--/Tag der Arbeit/' LabourDay.yaml
perl -pi -e 's/--dayDE--/Tag der Deutschen Einheit/' GermanUnityDay.yaml
perl -pi -e 's/--dayDE--/Heiligabend/' ChristmasEve.yaml
perl -pi -e 's/--dayDE--/1. Weihnachtstag/' ChristmasDay.yaml
perl -pi -e 's/--dayDE--/2. Weihnachtstag/' BoxingDay.yaml
perl -pi -e 's/--dayDE--/Silvester/' NewYearsEve.yaml
perl -pi -e 's/--dayDE--/Mariä Himmelfahrt/' AssumptionofMary.yaml
perl -pi -e 's/--dayDE--/Reformationstag/' ReformationDay.yaml
perl -pi -e 's/--dayDE--/Allerheiligen/' AllHallows.yaml
perl -pi -e 's/--dayDE--/Schweizer Bundesfeiertag/' SwissNationalDay.yaml






perl -pi -e "s/--dayEN--/New Year's Day/" NewYearsDay.yaml
perl -pi -e 's/--dayEN--/Berchtoldstag/' Berchtoldstag.yaml
perl -pi -e 's/--dayEN--/Epiphany/' Epiphany.yaml
perl -pi -e 's/--dayEN--/Labour Day/' LabourDay.yaml
perl -pi -e 's/--dayEN--/German Unity Day/' GermanUnityDay.yaml
perl -pi -e 's/--dayEN--/Christmas Eve/' ChristmasEve.yaml
perl -pi -e 's/--dayEN--/Christmas Day/' ChristmasDay.yaml
perl -pi -e 's/--dayEN--/Boxing Day/' BoxingDay.yaml
perl -pi -e "s/--dayEN--/New Year's Eve/" NewYearsEve.yaml
perl -pi -e 's/--dayEN--/Assumption of Mary/' AssumptionofMary.yaml
perl -pi -e 's/--dayEN--/Reformation Day/' ReformationDay.yaml
perl -pi -e 's/--dayEN--/All Hallows/' AllHallows.yaml
perl -pi -e 's/--dayEN--/Swiss National Day/' SwissNationalDay.yaml
