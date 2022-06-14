CREATE MIGRATION m1tvnxne3or2xtkofayku2voxzeiyljzgundztoxfrn6zmj4e72dza
    ONTO initial
{
  CREATE TYPE default::Link {
      CREATE REQUIRED PROPERTY title -> std::str;
      CREATE REQUIRED PROPERTY url -> std::str;
  };
};
