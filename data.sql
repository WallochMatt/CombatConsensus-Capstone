INSERT INTO events_event (event_title, date) VALUES ('UFC 281', '2022-11-12');

--^ seed then proceed

INSERT INTO fighters_fighter (name) VALUES ('Julio Arce');
INSERT INTO fighters_fighter (name) VALUES ('Montel Jackson');




INSERT INTO fighters_fighter (name) VALUES ('Karolina Kowalkiewicz');
INSERT INTO fighters_fighter (name) VALUES ('Silvana Gomez Juarez');




INSERT INTO fighters_fighter (name) VALUES ('Andre Petroski');
INSERT INTO fighters_fighter (name) VALUES ('Wellington Turman');



INSERT INTO fighters_fighter (name) VALUES ('Dan Hooker');
INSERT INTO fighters_fighter (name) VALUES ('Claudio Peulles');




INSERT INTO fighters_fighter (name) VALUES ('Dustin Porier');
INSERT INTO fighters_fighter (name) VALUES ('Michael Chandler');




INSERT INTO fighters_fighter (name) VALUES ('Carla Esparza');
INSERT INTO fighters_fighter (name) VALUES ('Zhang Weili');




INSERT INTO fighters_fighter (name) VALUES ('Israel Adesanya');
INSERT INTO fighters_fighter (name) VALUES ('Alex Pereira');

--^ seed then proceed

                                                                                                                                                 bout_name, event_id, number_of_rounds, fighter_one_id, fighter_two_id, judge_avg_one, judge_avg_two, results
INSERT INTO matches_match (bout_name, event_id, number_of_rounds, fighter_one_id, fighter_two_id, judge_avg_one, judge_avg_two, results) VALUES ('ARCE VS. JACKSON', '1', '3', '1', '2', '27.33', '29.66', 'JACKSON by Unanimous Decision');

INSERT INTO matches_match (bout_name, event_id, number_of_rounds, fighter_one_id, fighter_two_id, judge_avg_one, judge_avg_two, results) VALUES ('KOWALKIEWICZ VS. JUAREZ', '1', '3', '3', '4', '29', '28', 'KOWALKIEWICZ by Unanimous Decision');

INSERT INTO matches_match (bout_name, event_id, number_of_rounds, fighter_one_id, fighter_two_id, judge_avg_one, judge_avg_two, results) VALUES ('PETROSKI VS. TURMAN', '1', '3', '5', '6', '29.66', '27.33', 'PETROSKI by Unanimous Decision');

INSERT INTO matches_match (bout_name, event_id, number_of_rounds, fighter_one_id, fighter_two_id, judge_avg_one, judge_avg_two, results) VALUES ('HOOKER VS.PEULLES', '1', '1', '7', '8', '10', '9', 'HOOKER by TKO');

INSERT INTO matches_match (bout_name, event_id, number_of_rounds, fighter_one_id, fighter_two_id, judge_avg_one, judge_avg_two, results) VALUES ('POIRIER VS.CHANDLER', '1', '2', '9', '10', '19', '19', 'POIRIER by Submission(rear-naked choke)');

INSERT INTO matches_match (bout_name, event_id, number_of_rounds, fighter_one_id, fighter_two_id, judge_avg_one, judge_avg_two, results) VALUES ('ESPARZA VS.WEILI', '1', '1', '11', '12', '9', '10', 'WEILI by Submission(rear-naked choke');

INSERT INTO matches_match (bout_name, event_id, number_of_rounds, fighter_one_id, fighter_two_id, judge_avg_one, judge_avg_two, results) VALUES ('ADESANYA VS. PEREIRA', '1', '4', '13', '14', '39', '37', 'PEREIRA by TKO');





