#!/bin/bash

cd ../csv
bash ../scripts/connect-docker.sh ../scripts/psql-csv.sql
cd ../json
bash ../scripts/connect-docker.sh ../scripts/psql-json.sql
cd ../xml
bash ../scripts/connect-docker.sh ../scripts/psql-xml.sql