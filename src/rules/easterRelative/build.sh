cp template.yaml RoseMonday.yaml
cp template.yaml ShroveTuesday.yaml
cp template.yaml AshWednesday.yaml
cp template.yaml MaundyThursday.yaml
cp template.yaml GoodFriday.yaml
cp template.yaml EasterDay.yaml
cp template.yaml EasterMonday.yaml
cp template.yaml Ascension.yaml
cp template.yaml Whitsunday.yaml
cp template.yaml Whitmonday.yaml
cp template.yaml CorpusChristi.yaml

perl -pi -e 's/--d--/48 days before /' RoseMonday.yaml
perl -pi -e 's/--d--/47 days before /' ShroveTuesday.yaml
perl -pi -e 's/--d--/46 days before /' AshWednesday.yaml
perl -pi -e 's/--d--/3 days before /' MaundyThursday.yaml
perl -pi -e 's/--d--/2 days before /' GoodFriday.yaml
perl -pi -e 's/--d--//' EasterDay.yaml
perl -pi -e 's/--d--/1 day after /' EasterMonday.yaml
perl -pi -e 's/--d--/39 days after /' Ascension.yaml
perl -pi -e 's/--d--/49 days after /' Whitsunday.yaml
perl -pi -e 's/--d--/50 days after /' Whitmonday.yaml
perl -pi -e 's/--d--/60 days after /' CorpusChristi.yaml

perl -pi -e 's/--offset--/-48/' RoseMonday.yaml
perl -pi -e 's/--offset--/-47/' ShroveTuesday.yaml
perl -pi -e 's/--offset--/-46/' AshWednesday.yaml
perl -pi -e 's/--offset--/-3/' MaundyThursday.yaml
perl -pi -e 's/--offset--/-2/' GoodFriday.yaml
perl -pi -e 's/--offset--/0/' EasterDay.yaml
perl -pi -e 's/--offset--/1/' EasterMonday.yaml
perl -pi -e 's/--offset--/39/' Ascension.yaml
perl -pi -e 's/--offset--/49/' Whitsunday.yaml
perl -pi -e 's/--offset--/50/' Whitmonday.yaml
perl -pi -e 's/--offset--/60/' CorpusChristi.yaml


perl -pi -e 's/--dayEN--/Rose Monday/' RoseMonday.yaml
perl -pi -e 's/--dayEN--/Shrove Tuesday/' ShroveTuesday.yaml
perl -pi -e 's/--dayEN--/Ash Wednesday/' AshWednesday.yaml
perl -pi -e 's/--dayEN--/Maundy Thursday/' MaundyThursday.yaml
perl -pi -e 's/--dayEN--/Good Friday/' GoodFriday.yaml
perl -pi -e 's/--dayEN--/Easter Day/' EasterDay.yaml
perl -pi -e 's/--dayEN--/Easter Monday/' EasterMonday.yaml
perl -pi -e 's/--dayEN--/Feast of the Ascension/' Ascension.yaml
perl -pi -e 's/--dayEN--/Whitsunday/' Whitsunday.yaml
perl -pi -e 's/--dayEN--/Whitmonday/' Whitmonday.yaml
perl -pi -e 's/--dayEN--/Corpus Christi/' CorpusChristi.yaml

perl -pi -e 's/--dayDE--/Rosenmontag/' RoseMonday.yaml
perl -pi -e 's/--dayDE--/Fastnachtsdienstag/' ShroveTuesday.yaml
perl -pi -e 's/--dayDE--/Aschermittwoch/' AshWednesday.yaml
perl -pi -e 's/--dayDE--/Gründonnerstag/' MaundyThursday.yaml
perl -pi -e 's/--dayDE--/Karfreitag/' GoodFriday.yaml
perl -pi -e 's/--dayDE--/Ostersonntag/' EasterDay.yaml
perl -pi -e 's/--dayDE--/Ostermontag/' EasterMonday.yaml
perl -pi -e 's/--dayDE--/Christi Himmelfahrt/' Ascension.yaml
perl -pi -e 's/--dayDE--/Pfingstsonntag/' Whitsunday.yaml
perl -pi -e 's/--dayDE--/Pfingstmontag/' Whitmonday.yaml
perl -pi -e 's/--dayDE--/Fronleichnam/' CorpusChristi.yaml
