#!/bin/bash

PGPASSWORD=postgres psql -d sg_data -h localhost -U postgres -f $1