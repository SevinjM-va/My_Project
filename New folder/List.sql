-- Table: public.menu

-- DROP TABLE IF EXISTS public.menu;

CREATE TABLE IF NOT EXISTS public.menu
select * from menu
insert into menu (name)
values ('menu_6')
(
    id integer NOT NULL DEFAULT nextval('menu_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT menu_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.menu
    OWNER to postgres;
	
	
	create table foods (
		id serial primary key,
		name varchar(100),
		price integer
	)
	
	
	CREATE TABLE menu_item (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    restaurant_id INTEGER REFERENCES restaurants(id)
);

select * from menu_item
select * from restaurants

	select * from menu
	select * from foods
	select * from restaurants order by id
	full join menu
	select * from menu
	
	alter table menu
	add categ_id integer
	
	
	CREATE TABLE isti_yemekler (
	  id SERIAL PRIMARY KEY,
	  name varchar(100) NOT NULL,
		price numeric not null
	);
	
	select * from isti_yemekler
	select * from rest
	
	INSERT INTO isti_yemekler (name, price)
	VALUES ('borş','8.50'),
	('mərci supu', 5.50),
	('');
	
	select * from category
	inner join ('menu.name')
	on restaurants.menu.id = menu.id
	where menu.id =1
	
	
	select menu_id from restaurants 
	inner join menu on restaurants.menu_id = menu.id 
	
	select row_to_json(row) from (select * from restaurants) row
	
	
	select json_agg(to_json(menu))
	from (select * from restaurants)menu

SELECT * FROM category 

SELECT * FROM menu_item 
INNER JOIN categories 
ON menu.categ_id = categories.id

CREATE TABLE menu_item (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category_id INTEGER REFERENCES category(id)
);


CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    restaurant_id INTEGER REFERENCES restaurants(id)

);
INSERT INTO category (name, restaurant_id) 
VALUES
    ('Main Course',6 ),
	 ('Side Dishes', 6),
	  ('Dishes in Tendir', 6),
	   ('Fish Dishes', 6),
	   ('Drinks', 6),
	   ('Rice', 6)

	
INSERT INTO menu_item (name, price, category_id) 
VALUES
    ('Steak', 16.10,24),  
    ('Roast Chicken', 15.80,24),  
    ('Chicken with Cream', 13.00, 24),
    ('Grilled Chicken', 21.80, 24),
	('Roast Beef', 20.80, 24),	
	 ('Fajitas with Meat', 25.70, 24),
	 ('French Fries', 30.30, 24),
	 ('Rice', 9.00, 25),
	 ('Buckwheat', 8.50, 25),
	 ('Mushrooms', 15.00, 25),
	 ('Salmon', 18.50, 25),
	 ('Zander Fish', 16.50, 25),
	 ('Berge', 10.00, 25),
	 ('Dorado', 7.50, 25),
	 ('Assorted Chhese', 14.00, 26),
	 ('Olives', 4.70, 26),
	 ('Suzma', 3.50, 26),
	 ('Adjika', 4.50, 26),
	 ('Lula Kebab', 12.00, 26),
	 ('Tika Kebab', 12.00, 26),
	 ('Lamb Basdirma', 12.00, 27),
	 ('Beef Basdirma', 12.00, 27),
	 ('Entrecote Kebab', 12.00, 27),
	 ('Pomegranate Roasts with Beef', 16.00, 27),
	 ('Creamy Beef', 16.00, 27),
	('Dolma', 12.00, 28),
	 ('Beef with Vegetables', 16.00, 28),
	 ('Creamy Lamb Shank ', 12.00, 28),
	 ('Caspian Kutum', 35.00, 28),
	 ('Beluga Kebab', 20.00, 28),
	 ('Sturgeon', 37.00, 28),
	 ('Trout Kebab', 12.00, 29),
	 ('Dushbara Soup', 7.00, 29),
	 ('Village Chicken Soup', 6.00, 29),
	 ('Merci', 7.00, 29)

	 
	 
	 