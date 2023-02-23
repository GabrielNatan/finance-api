CREATE DATABASE finance;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS customer(
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  last_name VARCHAR,
  password VARCHAR NOT NULL,
  key_hash VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS wallet(
   id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
   balance NUMERIC,
   created_at TIMESTAMP DEFAULT now(),
   customer_id UUID,
   FOREIGN KEY(customer_id) REFERENCES customer(id)
);
