\t
\a
\o actions.xml
SELECT query_to_xml('SELECT * FROM actions', false, false, '');
\o agenda_items.xml
SELECT query_to_xml('SELECT * FROM agenda_items', false, false, '');
\o attendances.xml
SELECT query_to_xml('SELECT * FROM attendances', false, false, '');
\o bodies.xml
SELECT query_to_xml('SELECT * FROM bodies', false, false, '');
\o bylaws.xml
SELECT query_to_xml('SELECT * FROM bylaws', false, false, '');
\o events.xml
SELECT query_to_xml('SELECT * FROM events', false, false, '');
\o meetings.xml
SELECT query_to_xml('SELECT * FROM meetings', false, false, '');
\o memberships.xml
SELECT query_to_xml('SELECT * FROM memberships', false, false, '');
\o people.xml
SELECT query_to_xml('SELECT * FROM people', false, false, '');
\o positions.xml
SELECT query_to_xml('SELECT * FROM positions', false, false, '');
\o projects.xml
SELECT query_to_xml('SELECT * FROM projects', false, false, '');
\o sessions.xml
SELECT query_to_xml('SELECT * FROM sessions', false, false, '');
\o subbodies.xml
SELECT query_to_xml('SELECT * FROM subbodies', false, false, '');
\o subbody_attendances.xml
SELECT query_to_xml('SELECT * FROM subbody_attendances', false, false, '');
\o subbody_meetings.xml
SELECT query_to_xml('SELECT * FROM subbody_meetings', false, false, '');
\o subbody_memberships.xml
SELECT query_to_xml('SELECT * FROM subbody_memberships', false, false, '');
\o subbody_positions.xml
SELECT query_to_xml('SELECT * FROM subbody_positions', false, false, '');
\o updates.xml
SELECT query_to_xml('SELECT * FROM updates', false, false, '');