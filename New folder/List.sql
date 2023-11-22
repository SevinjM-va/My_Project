-- Table: public.Restaurants

-- DROP TABLE IF EXISTS public."Restaurants";

CREATE TABLE IF NOT EXISTS public."Restaurants"
(
    id integer NOT NULL DEFAULT nextval('"Restaurants_id_seq"'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Restaurants_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Restaurants"
    OWNER to postgres;
	
	insert into restaurants (name)
	values('Art Club Restaurant' )
	
	
	create table qiymət(
		restoran integer not null,
		yemek integer not null,
		qiymət integer not null
	)
	create table users(
		id serial primary key not null,
		firstName varchar(20) not null,
		lastName varchar(30) not null,
		userName varchar(20) not null,
		email varchar(50) not null,
		password varchar(30) not null,
		created_on TIMESTAMP NOT NULL
		
	)
	SELECT * FROM public.Restaurants;
	select * from yemekler;
	select * from qiymət;
	select * from users;
	
	insert into qiymət(restoran, yemek,qiymət)
	values (10,12,12.50),
	(10,7,6.50),
	(10,4,2.50)
	
	
	select restaurants.id, restaurants.name, yemekler.name, qiymət.qiymət 
	from restaurants 
	inner join yemekler 
	on restaurants.id = yemekler.restoranlar 
	inner join qiymət
	on qiymət.yemek = yemekler.restoranlar
	