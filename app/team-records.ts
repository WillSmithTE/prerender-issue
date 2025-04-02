import { z } from "zod";

export type Team = {
  name: string;
  color: string;
  years: Row[];
};

export const Row = z.object({
  year: z.string(),
  regularSeasonWinPercentage: z
    .string()
    .transform((percentage) => {
      // Transform the percentage from a string to a number and divide by 100 if necessary
      const num = parseFloat(percentage);
      return num > 1 ? num / 100 : num;
    })
    .refine((num) => num >= 0 && num <= 1, {
      message: "Win percentage must be between 0 and 1",
    }),
});
export type Row = z.infer<typeof Row>;

export const teamRecords: Team[] = [
  {
    name: "Atlanta Hawks",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.569,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.299,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.606,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.159,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.62,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1966-67",
        regularSeasonWinPercentage: 0.481,
      },
      {
        year: "1965-66",
        regularSeasonWinPercentage: 0.45,
      },
      {
        year: "1964-65",
        regularSeasonWinPercentage: 0.563,
      },
      {
        year: "1963-64",
        regularSeasonWinPercentage: 0.575,
      },
      {
        year: "1962-63",
        regularSeasonWinPercentage: 0.6,
      },
      {
        year: "1961-62",
        regularSeasonWinPercentage: 0.363,
      },
      {
        year: "1960-61",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1959-60",
        regularSeasonWinPercentage: 0.613,
      },
      {
        year: "1958-59",
        regularSeasonWinPercentage: 0.681,
      },
      {
        year: "1957-58",
        regularSeasonWinPercentage: 0.569,
      },
      {
        year: "1956-57",
        regularSeasonWinPercentage: 0.472,
      },
      {
        year: "1955-56",
        regularSeasonWinPercentage: 0.458,
      },
      {
        year: "1954-55",
        regularSeasonWinPercentage: 0.361,
      },
      {
        year: "1953-54",
        regularSeasonWinPercentage: 0.292,
      },
      {
        year: "1952-53",
        regularSeasonWinPercentage: 0.38,
      },
      {
        year: "1951-52",
        regularSeasonWinPercentage: 0.258,
      },
      {
        year: "1950-51",
        regularSeasonWinPercentage: 0.368,
      },
      {
        year: "1949-50",
        regularSeasonWinPercentage: 0.453,
      },
    ],
    color: "#E03A3E",
  },
  {
    name: "Boston Celtics",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.78,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.667,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.506,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.591,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.805,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.38,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.183,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.817,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.768,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.768,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.744,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.829,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1966-67",
        regularSeasonWinPercentage: 0.741,
      },
      {
        year: "1965-66",
        regularSeasonWinPercentage: 0.675,
      },
      {
        year: "1964-65",
        regularSeasonWinPercentage: 0.775,
      },
      {
        year: "1963-64",
        regularSeasonWinPercentage: 0.738,
      },
      {
        year: "1962-63",
        regularSeasonWinPercentage: 0.725,
      },
      {
        year: "1961-62",
        regularSeasonWinPercentage: 0.75,
      },
      {
        year: "1960-61",
        regularSeasonWinPercentage: 0.722,
      },
      {
        year: "1959-60",
        regularSeasonWinPercentage: 0.787,
      },
      {
        year: "1958-59",
        regularSeasonWinPercentage: 0.722,
      },
      {
        year: "1957-58",
        regularSeasonWinPercentage: 0.681,
      },
      {
        year: "1956-57",
        regularSeasonWinPercentage: 0.611,
      },
      {
        year: "1955-56",
        regularSeasonWinPercentage: 0.542,
      },
      {
        year: "1954-55",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1953-54",
        regularSeasonWinPercentage: 0.583,
      },
      {
        year: "1952-53",
        regularSeasonWinPercentage: 0.648,
      },
      {
        year: "1951-52",
        regularSeasonWinPercentage: 0.591,
      },
      {
        year: "1950-51",
        regularSeasonWinPercentage: 0.565,
      },
      {
        year: "1949-50",
        regularSeasonWinPercentage: 0.324,
      },
      {
        year: "1948-49",
        regularSeasonWinPercentage: 0.417,
      },
      {
        year: "1947-48",
        regularSeasonWinPercentage: 0.417,
      },
      {
        year: "1946-47",
        regularSeasonWinPercentage: 0.367,
      },
    ],
    color: "#007A33",
  },
  {
    name: "Brooklyn Nets",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.667,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.486,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.333,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.146,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.32,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.268,
      },
    ],
    color: "#000000",
  },
  {
    name: "Charlotte Hornets",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.458,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.106,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.22,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.52,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.244,
      },
    ],
    color: "#1D1160",
  },
  {
    name: "Chicago Bulls",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.431,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.338,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.758,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.183,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.26,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.841,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.878,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.817,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.744,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "1966-67",
        regularSeasonWinPercentage: 0.407,
      },
    ],
    color: "#CE1141",
  },
  {
    name: "Cleveland Cavaliers",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.306,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.292,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.318,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.744,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.805,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.44,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.183,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.183,
      },
    ],
    color: "#6F263D",
  },
  {
    name: "Dallas Mavericks",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.583,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.545,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.817,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.38,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.159,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.134,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.183,
      },
    ],
    color: "#00538C",
  },
  {
    name: "Denver Nuggets",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.653,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.63,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.576,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.134,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.61,
      },
    ],
    color: "#0E2240",
  },
  {
    name: "Detroit Pistons",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.171,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.278,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.303,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.379,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.78,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.58,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.768,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.195,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1966-67",
        regularSeasonWinPercentage: 0.37,
      },
      {
        year: "1965-66",
        regularSeasonWinPercentage: 0.275,
      },
      {
        year: "1964-65",
        regularSeasonWinPercentage: 0.388,
      },
      {
        year: "1963-64",
        regularSeasonWinPercentage: 0.288,
      },
      {
        year: "1962-63",
        regularSeasonWinPercentage: 0.425,
      },
      {
        year: "1961-62",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1960-61",
        regularSeasonWinPercentage: 0.43,
      },
      {
        year: "1959-60",
        regularSeasonWinPercentage: 0.4,
      },
      {
        year: "1958-59",
        regularSeasonWinPercentage: 0.389,
      },
      {
        year: "1957-58",
        regularSeasonWinPercentage: 0.458,
      },
      {
        year: "1956-57",
        regularSeasonWinPercentage: 0.472,
      },
      {
        year: "1955-56",
        regularSeasonWinPercentage: 0.514,
      },
      {
        year: "1954-55",
        regularSeasonWinPercentage: 0.597,
      },
      {
        year: "1953-54",
        regularSeasonWinPercentage: 0.556,
      },
      {
        year: "1952-53",
        regularSeasonWinPercentage: 0.522,
      },
      {
        year: "1951-52",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1950-51",
        regularSeasonWinPercentage: 0.471,
      },
      {
        year: "1949-50",
        regularSeasonWinPercentage: 0.588,
      },
      {
        year: "1948-49",
        regularSeasonWinPercentage: 0.367,
      },
    ],
    color: "#C8102E",
  },
  {
    name: "Golden State Warriors",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.542,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.231,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.817,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.89,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.817,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.348,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.42,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1966-67",
        regularSeasonWinPercentage: 0.543,
      },
      {
        year: "1965-66",
        regularSeasonWinPercentage: 0.438,
      },
      {
        year: "1964-65",
        regularSeasonWinPercentage: 0.213,
      },
      {
        year: "1963-64",
        regularSeasonWinPercentage: 0.6,
      },
      {
        year: "1962-63",
        regularSeasonWinPercentage: 0.388,
      },
      {
        year: "1961-62",
        regularSeasonWinPercentage: 0.613,
      },
      {
        year: "1960-61",
        regularSeasonWinPercentage: 0.582,
      },
      {
        year: "1959-60",
        regularSeasonWinPercentage: 0.653,
      },
      {
        year: "1958-59",
        regularSeasonWinPercentage: 0.444,
      },
      {
        year: "1957-58",
        regularSeasonWinPercentage: 0.514,
      },
      {
        year: "1956-57",
        regularSeasonWinPercentage: 0.514,
      },
      {
        year: "1955-56",
        regularSeasonWinPercentage: 0.625,
      },
      {
        year: "1954-55",
        regularSeasonWinPercentage: 0.458,
      },
      {
        year: "1953-54",
        regularSeasonWinPercentage: 0.403,
      },
      {
        year: "1952-53",
        regularSeasonWinPercentage: 0.174,
      },
      {
        year: "1951-52",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1950-51",
        regularSeasonWinPercentage: 0.606,
      },
      {
        year: "1949-50",
        regularSeasonWinPercentage: 0.382,
      },
      {
        year: "1948-49",
        regularSeasonWinPercentage: 0.467,
      },
      {
        year: "1947-48",
        regularSeasonWinPercentage: 0.563,
      },
      {
        year: "1946-47",
        regularSeasonWinPercentage: 0.583,
      },
    ],
    color: "#1D428A",
  },
  {
    name: "Houston Rockets",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.236,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.611,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.793,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.515,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.62,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.171,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.183,
      },
    ],
    color: "#CE1141",
  },
  {
    name: "Indiana Pacers",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.472,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.616,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.605,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.636,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.744,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.66,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.439,
      },
    ],
    color: "#002D62",
  },
  {
    name: "Los Angeles Clippers",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.653,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.681,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.606,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.183,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.18,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.146,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.268,
      },
    ],
    color: "#C8102E",
  },
  {
    name: "Los Angeles Lakers",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.583,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.621,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.793,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.817,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.62,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.744,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.768,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.793,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.841,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1966-67",
        regularSeasonWinPercentage: 0.444,
      },
      {
        year: "1965-66",
        regularSeasonWinPercentage: 0.563,
      },
      {
        year: "1964-65",
        regularSeasonWinPercentage: 0.613,
      },
      {
        year: "1963-64",
        regularSeasonWinPercentage: 0.525,
      },
      {
        year: "1962-63",
        regularSeasonWinPercentage: 0.663,
      },
      {
        year: "1961-62",
        regularSeasonWinPercentage: 0.675,
      },
      {
        year: "1960-61",
        regularSeasonWinPercentage: 0.456,
      },
      {
        year: "1959-60",
        regularSeasonWinPercentage: 0.333,
      },
      {
        year: "1958-59",
        regularSeasonWinPercentage: 0.458,
      },
      {
        year: "1957-58",
        regularSeasonWinPercentage: 0.264,
      },
      {
        year: "1956-57",
        regularSeasonWinPercentage: 0.472,
      },
      {
        year: "1955-56",
        regularSeasonWinPercentage: 0.458,
      },
      {
        year: "1954-55",
        regularSeasonWinPercentage: 0.556,
      },
      {
        year: "1953-54",
        regularSeasonWinPercentage: 0.639,
      },
      {
        year: "1952-53",
        regularSeasonWinPercentage: 0.686,
      },
      {
        year: "1951-52",
        regularSeasonWinPercentage: 0.606,
      },
      {
        year: "1950-51",
        regularSeasonWinPercentage: 0.647,
      },
      {
        year: "1949-50",
        regularSeasonWinPercentage: 0.75,
      },
      {
        year: "1948-49",
        regularSeasonWinPercentage: 0.733,
      },
    ],
    color: "#552583",
  },
  {
    name: "Memphis Grizzlies",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.528,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.466,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.621,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.16,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.171,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.183,
      },
    ],
    color: "#5D76A9",
  },
  {
    name: "Miami Heat",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.556,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.603,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.805,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.697,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.183,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.66,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.744,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.22,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.183,
      },
    ],
    color: "#98002E",
  },
  {
    name: "Milwaukee Bucks",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.639,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.767,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.183,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.47,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.56,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.768,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.805,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.329,
      },
    ],
    color: "#00471B",
  },
  {
    name: "Minnesota Timberwolves",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.319,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.297,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.195,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.394,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.183,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.183,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.268,
      },
    ],
    color: "#0C2340",
  },
  {
    name: "New Orleans Pelicans",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.431,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.417,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.318,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.22,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.573,
      },
    ],
    color: "#0C2340",
  },
  {
    name: "New York Knicks",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.569,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.318,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.545,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.54,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1966-67",
        regularSeasonWinPercentage: 0.444,
      },
      {
        year: "1965-66",
        regularSeasonWinPercentage: 0.375,
      },
      {
        year: "1964-65",
        regularSeasonWinPercentage: 0.388,
      },
      {
        year: "1963-64",
        regularSeasonWinPercentage: 0.275,
      },
      {
        year: "1962-63",
        regularSeasonWinPercentage: 0.263,
      },
      {
        year: "1961-62",
        regularSeasonWinPercentage: 0.363,
      },
      {
        year: "1960-61",
        regularSeasonWinPercentage: 0.266,
      },
      {
        year: "1959-60",
        regularSeasonWinPercentage: 0.36,
      },
      {
        year: "1958-59",
        regularSeasonWinPercentage: 0.556,
      },
      {
        year: "1957-58",
        regularSeasonWinPercentage: 0.486,
      },
      {
        year: "1956-57",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1955-56",
        regularSeasonWinPercentage: 0.486,
      },
      {
        year: "1954-55",
        regularSeasonWinPercentage: 0.528,
      },
      {
        year: "1953-54",
        regularSeasonWinPercentage: 0.611,
      },
      {
        year: "1952-53",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1951-52",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1950-51",
        regularSeasonWinPercentage: 0.545,
      },
      {
        year: "1949-50",
        regularSeasonWinPercentage: 0.588,
      },
      {
        year: "1948-49",
        regularSeasonWinPercentage: 0.533,
      },
      {
        year: "1947-48",
        regularSeasonWinPercentage: 0.542,
      },
      {
        year: "1946-47",
        regularSeasonWinPercentage: 0.55,
      },
    ],
    color: "#006BB6",
  },
  {
    name: "Oklahoma City Thunder",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.306,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.611,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.712,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.744,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.78,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.768,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.28,
      },
    ],
    color: "#007AC1",
  },
  {
    name: "Orlando Magic",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.292,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.452,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.66,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.22,
      },
    ],
    color: "#0077C0",
  },
  {
    name: "Philadelphia 76ers",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.681,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.589,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.122,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.22,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.53,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.56,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.22,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.793,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.11,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "1966-67",
        regularSeasonWinPercentage: 0.84,
      },
      {
        year: "1965-66",
        regularSeasonWinPercentage: 0.688,
      },
      {
        year: "1964-65",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1963-64",
        regularSeasonWinPercentage: 0.425,
      },
      {
        year: "1962-63",
        regularSeasonWinPercentage: 0.6,
      },
      {
        year: "1961-62",
        regularSeasonWinPercentage: 0.513,
      },
      {
        year: "1960-61",
        regularSeasonWinPercentage: 0.481,
      },
      {
        year: "1959-60",
        regularSeasonWinPercentage: 0.6,
      },
      {
        year: "1958-59",
        regularSeasonWinPercentage: 0.486,
      },
      {
        year: "1957-58",
        regularSeasonWinPercentage: 0.569,
      },
      {
        year: "1956-57",
        regularSeasonWinPercentage: 0.528,
      },
      {
        year: "1955-56",
        regularSeasonWinPercentage: 0.486,
      },
      {
        year: "1954-55",
        regularSeasonWinPercentage: 0.597,
      },
      {
        year: "1953-54",
        regularSeasonWinPercentage: 0.583,
      },
      {
        year: "1952-53",
        regularSeasonWinPercentage: 0.662,
      },
      {
        year: "1951-52",
        regularSeasonWinPercentage: 0.606,
      },
      {
        year: "1950-51",
        regularSeasonWinPercentage: 0.485,
      },
      {
        year: "1949-50",
        regularSeasonWinPercentage: 0.797,
      },
    ],
    color: "#006BB6",
  },
  {
    name: "Phoenix Suns",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.78,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.708,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.466,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.744,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.54,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.195,
      },
    ],
    color: "#1D1160",
  },
  {
    name: "Portland Trail Blazers",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.583,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.473,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.424,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.7,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.768,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.22,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.354,
      },
    ],
    color: "#E03A3E",
  },
  {
    name: "Sacramento Kings",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.431,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.431,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.333,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.207,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.744,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.54,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1966-67",
        regularSeasonWinPercentage: 0.481,
      },
      {
        year: "1965-66",
        regularSeasonWinPercentage: 0.563,
      },
      {
        year: "1964-65",
        regularSeasonWinPercentage: 0.6,
      },
      {
        year: "1963-64",
        regularSeasonWinPercentage: 0.688,
      },
      {
        year: "1962-63",
        regularSeasonWinPercentage: 0.525,
      },
      {
        year: "1961-62",
        regularSeasonWinPercentage: 0.538,
      },
      {
        year: "1960-61",
        regularSeasonWinPercentage: 0.418,
      },
      {
        year: "1959-60",
        regularSeasonWinPercentage: 0.253,
      },
      {
        year: "1958-59",
        regularSeasonWinPercentage: 0.264,
      },
      {
        year: "1957-58",
        regularSeasonWinPercentage: 0.458,
      },
      {
        year: "1956-57",
        regularSeasonWinPercentage: 0.431,
      },
      {
        year: "1955-56",
        regularSeasonWinPercentage: 0.431,
      },
      {
        year: "1954-55",
        regularSeasonWinPercentage: 0.403,
      },
      {
        year: "1953-54",
        regularSeasonWinPercentage: 0.611,
      },
      {
        year: "1952-53",
        regularSeasonWinPercentage: 0.629,
      },
      {
        year: "1951-52",
        regularSeasonWinPercentage: 0.621,
      },
      {
        year: "1950-51",
        regularSeasonWinPercentage: 0.603,
      },
      {
        year: "1949-50",
        regularSeasonWinPercentage: 0.75,
      },
      {
        year: "1948-49",
        regularSeasonWinPercentage: 0.75,
      },
    ],
    color: "#5A2D81",
  },
  {
    name: "San Antonio Spurs",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.458,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.744,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.817,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.758,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.744,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.768,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.74,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.244,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.537,
      },
    ],
    color: "#C4CED4",
  },
  {
    name: "Toronto Raptors",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.375,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.736,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.707,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.72,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.683,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.415,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.348,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.329,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.402,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.46,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.195,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.256,
      },
    ],
    color: "#CE1141",
  },
  {
    name: "Utah Jazz",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.722,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.611,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.545,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.74,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.756,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.78,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.646,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.671,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.622,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.341,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.28,
      },
    ],
    color: "#002B5C",
  },
  {
    name: "Washington Wizards",
    years: [
      {
        year: "2023-24",
        regularSeasonWinPercentage: 0.183,
      },
      {
        year: "2022-23",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2021-22",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "2020-21",
        regularSeasonWinPercentage: 0.472,
      },
      {
        year: "2019-20",
        regularSeasonWinPercentage: 0.347,
      },
      {
        year: "2018-19",
        regularSeasonWinPercentage: 0.39,
      },
      {
        year: "2017-18",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2016-17",
        regularSeasonWinPercentage: 0.598,
      },
      {
        year: "2015-16",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2014-15",
        regularSeasonWinPercentage: 0.561,
      },
      {
        year: "2013-14",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "2012-13",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "2011-12",
        regularSeasonWinPercentage: 0.303,
      },
      {
        year: "2010-11",
        regularSeasonWinPercentage: 0.28,
      },
      {
        year: "2009-10",
        regularSeasonWinPercentage: 0.317,
      },
      {
        year: "2008-09",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "2007-08",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "2006-07",
        regularSeasonWinPercentage: 0.5,
      },
      {
        year: "2005-06",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "2004-05",
        regularSeasonWinPercentage: 0.549,
      },
      {
        year: "2003-04",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "2002-03",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2001-02",
        regularSeasonWinPercentage: 0.451,
      },
      {
        year: "2000-01",
        regularSeasonWinPercentage: 0.232,
      },
      {
        year: "1999-00",
        regularSeasonWinPercentage: 0.354,
      },
      {
        year: "1998-99",
        regularSeasonWinPercentage: 0.36,
      },
      {
        year: "1997-98",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1996-97",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1995-96",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1994-95",
        regularSeasonWinPercentage: 0.256,
      },
      {
        year: "1993-94",
        regularSeasonWinPercentage: 0.293,
      },
      {
        year: "1992-93",
        regularSeasonWinPercentage: 0.268,
      },
      {
        year: "1991-92",
        regularSeasonWinPercentage: 0.305,
      },
      {
        year: "1990-91",
        regularSeasonWinPercentage: 0.366,
      },
      {
        year: "1989-90",
        regularSeasonWinPercentage: 0.378,
      },
      {
        year: "1988-89",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1987-88",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1986-87",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1985-86",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1984-85",
        regularSeasonWinPercentage: 0.488,
      },
      {
        year: "1983-84",
        regularSeasonWinPercentage: 0.427,
      },
      {
        year: "1982-83",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1981-82",
        regularSeasonWinPercentage: 0.524,
      },
      {
        year: "1980-81",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1979-80",
        regularSeasonWinPercentage: 0.476,
      },
      {
        year: "1978-79",
        regularSeasonWinPercentage: 0.659,
      },
      {
        year: "1977-78",
        regularSeasonWinPercentage: 0.537,
      },
      {
        year: "1976-77",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1975-76",
        regularSeasonWinPercentage: 0.585,
      },
      {
        year: "1974-75",
        regularSeasonWinPercentage: 0.732,
      },
      {
        year: "1973-74",
        regularSeasonWinPercentage: 0.573,
      },
      {
        year: "1972-73",
        regularSeasonWinPercentage: 0.634,
      },
      {
        year: "1971-72",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1970-71",
        regularSeasonWinPercentage: 0.512,
      },
      {
        year: "1969-70",
        regularSeasonWinPercentage: 0.61,
      },
      {
        year: "1968-69",
        regularSeasonWinPercentage: 0.695,
      },
      {
        year: "1967-68",
        regularSeasonWinPercentage: 0.439,
      },
      {
        year: "1966-67",
        regularSeasonWinPercentage: 0.247,
      },
      {
        year: "1965-66",
        regularSeasonWinPercentage: 0.475,
      },
      {
        year: "1964-65",
        regularSeasonWinPercentage: 0.463,
      },
      {
        year: "1963-64",
        regularSeasonWinPercentage: 0.388,
      },
      {
        year: "1962-63",
        regularSeasonWinPercentage: 0.313,
      },
      {
        year: "1961-62",
        regularSeasonWinPercentage: 0.225,
      },
    ],
    color: "#002B5C",
  },
];
