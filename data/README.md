### sg_data Data

This directory contains the data contained in `seed.js` exported in the following formats:
- `csv`
- `json`
- `xml`

The `scripts` directory contains the scripts used to export the data from the database.

Running `bash export.sh` in the `scripts` directory will connect to the running docker database and export all of its data.