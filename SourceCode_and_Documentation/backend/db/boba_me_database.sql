--
-- PostgreSQL Boba-Me Database (Simple)
-- Server has to be modified for production to contain
-- triggers and constraints.
--

CREATE TABLE shop (
    id integer NOT NULL,
    name character varying(80) NOT NULL,
    town character varying(80) NOT NULL,
    city character varying(80) NOT NULL,
    country character varying(80) NOT NULL
);

CREATE TABLE menu (
    shop_id integer NOT NULL,
    drink_id integer NOT NULL,
    price decimal NOT NULL
);

CREATE TABLE topping (
    shop_id integer NOT NULL,
    topping character varying(80) NOT NULL,
    price decimal NOT NULL
);

CREATE TABLE shop_opening_times (
    shop_id integer NOT NULL,
    day_of_week integer NOT NULL,
    opening_time character varying(8) NOT NULL,
    closing_time character varying(8) NOT NULL
);

CREATE TABLE drink (
    id integer NOT NULL,
    name character varying(80) NOT NULL,
    rating integer
);

CREATE TABLE drink_ingredients (
    drink_id integer NOT NULL,
    ingredient character varying(80) NOT NULL
);

CREATE TABLE account (
    user_token character varying(80) UNIQUE NOT NULL,
    name character varying(80) NOT NULL,
    email character varying(80) NOT NULL,
    status integer NOT NULL
);

CREATE TABLE reward (
    user_token character varying(80) NOT NULL,
    reward character varying(80)
);

-- Insert Dummy Shop Data (0 for Gong and 1 for Chatime)
INSERT INTO shop VALUES (0, 'Gong Cha', 'Randwick', 'Sydney', 'Australia');
INSERT INTO shop VALUES (1, 'Chatime', 'Randwick', 'Sydney', 'Australia');

-- Insert Dummy Drink Data
INSERT INTO drink VALUES (0, 'Milk Foam Green Tea');
INSERT INTO drink VALUES (1, 'Pearl Milk Tea');
INSERT INTO drink VALUES (2, 'Royal Milk Tea');
INSERT INTO drink VALUES (3, 'Earl Grey Milk Tea');
INSERT INTO drink VALUES (4, 'Milk Foam Green Tea');

-- Insert Dummy Menu Data
INSERT INTO menu VALUES (0, 0, 6.20);
INSERT INTO menu VALUES (0, 1, 6.20);
INSERT INTO menu VALUES (0, 2, 5.50);
INSERT INTO menu VALUES (0, 3, 5.80);
INSERT INTO menu VALUES (0, 4, 6.20);

INSERT INTO menu VALUES (1, 0, 6.20);
INSERT INTO menu VALUES (1, 1, 6.20);
INSERT INTO menu VALUES (1, 2, 5.50);
INSERT INTO menu VALUES (1, 3, 5.80);
INSERT INTO menu VALUES (1, 4, 6.20);

-- Insert Dummy Topping Menu
INSERT INTO topping VALUES (0, 'Mango Pearls', 0.70);
INSERT INTO topping VALUES (0, 'Pearls', 0.70);
INSERT INTO topping VALUES (0, 'Lychee Pearls', 0.70);
INSERT INTO topping VALUES (0, 'Aloe Vera', 0.70);
INSERT INTO topping VALUES (0, 'White Pearls', 0.70);

INSERT INTO topping VALUES (1, 'Mango Pearls', 0.70);
INSERT INTO topping VALUES (1, 'Pearls', 0.70);
INSERT INTO topping VALUES (1, 'Lychee Pearls', 0.70);
INSERT INTO topping VALUES (1, 'Aloe Vera', 0.70);
INSERT INTO topping VALUES (1, 'White Pearls', 0.70);

-- Insert Dummy Shop Opening Time Data
INSERT INTO shop_opening_times VALUES (0, 0, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (0, 1, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (0, 2, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (0, 3, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (0, 4, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (0, 5, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (0, 6, '9:00 AM', '10:00 PM');

INSERT INTO shop_opening_times VALUES (1, 0, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (1, 1, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (1, 2, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (1, 3, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (1, 4, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (1, 5, '9:00 AM', '10:00 PM');
INSERT INTO shop_opening_times VALUES (1, 6, '9:00 AM', '10:00 PM');

-- Insert into drink ingredients
INSERT INTO drink_ingredients VALUES (0, 'Milk');
INSERT INTO drink_ingredients VALUES (0, 'Caffeine');
INSERT INTO drink_ingredients VALUES (0, 'Egg-free');
INSERT INTO drink_ingredients VALUES (0, 'Gluten-free');
INSERT INTO drink_ingredients VALUES (0, 'Gelatin-free');

INSERT INTO drink_ingredients VALUES (1, 'Milk');
INSERT INTO drink_ingredients VALUES (1, 'Caffeine');
INSERT INTO drink_ingredients VALUES (1, 'Egg-free');
INSERT INTO drink_ingredients VALUES (1, 'Gluten-free');
INSERT INTO drink_ingredients VALUES (1, 'Gelatin-free');

INSERT INTO drink_ingredients VALUES (2, 'Milk');
INSERT INTO drink_ingredients VALUES (2, 'Caffeine');
INSERT INTO drink_ingredients VALUES (2, 'Egg-free');
INSERT INTO drink_ingredients VALUES (2, 'Gluten-free');
INSERT INTO drink_ingredients VALUES (2, 'Gelatin-free');

INSERT INTO drink_ingredients VALUES (3, 'Milk');
INSERT INTO drink_ingredients VALUES (3, 'Caffeine');
INSERT INTO drink_ingredients VALUES (3, 'Egg-free');
INSERT INTO drink_ingredients VALUES (3, 'Gluten-free');
INSERT INTO drink_ingredients VALUES (3, 'Gelatin-free');