﻿using System.Collections.Generic;

namespace JavaScriptSerializer.Models
{
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public List<Person> Children { get; set; }
    }
}