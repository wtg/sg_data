\t
\a
\o actions.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM actions r;
\o agenda_items.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM agenda_items r;
\o attendances.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM attendances r;
\o bodies.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM bodies r;
\o bylaws.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM bylaws r;
\o events.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM events r;
\o meetings.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM meetings r;
\o memberships.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM memberships r;
\o people.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM people r;
\o positions.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM positions r;
\o projects.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM projects r;
\o sessions.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM sessions r;
\o subbodies.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM subbodies r;
\o subbody_attendances.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM subbody_attendances r;
\o subbody_meetings.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM subbody_meetings r;
\o subbody_memberships.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM subbody_memberships r;
\o subbody_positions.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM subbody_positions r;
\o updates.json
SELECT array_to_json(array_agg(row_to_json(r))) FROM updates r;
