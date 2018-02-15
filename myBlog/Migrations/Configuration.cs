namespace myBlog.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using myBlog.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "myBlog.Models.ApplicationDbContext";
        }

        protected override void Seed(ApplicationDbContext context)
        {
            var roleManager = new RoleManager<IdentityRole>(
                            new RoleStore<IdentityRole>(context));

            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                roleManager.Create(new IdentityRole { Name = "Admin" });
            }

            if (!context.Roles.Any(r => r.Name == "Moderator"))
            {
                roleManager.Create(new IdentityRole { Name = "Moderator" });
            }

            var userManager = new UserManager<ApplicationUser>(
                new UserStore<ApplicationUser>(context));

            //Admin
            //Check for the existence of an eamil
            if (!context.Users.Any(u => u.Email == "jlee87.mathis@mailfence.com"))
            {
                //If none is found then create a new user with that email
                userManager.Create(new ApplicationUser
                {
                    UserName = "jlee87.mathis@mailfence.com",
                    Email = "jlee87.mathis@mailfence.com",
                    FirstName = "John",
                    LastName = "Mathis",
                    DisplayName = "J_Lee87"
                }, "Abc&123");
            }
            //Now that we have both a Role and a user, we need to associate the two
            var userId = userManager.FindByEmail("jlee87.mathis@mailfence.com").Id;
            userManager.AddToRole(userId, "Admin");

            //Admin
            //Check for the existence of an eamil
            if (!context.Users.Any(u => u.Email == "BigTony@gmail.com"))
            {
                //If none is found then create a new user with that email
                userManager.Create(new ApplicationUser
                {
                    UserName = "BigTony@gmail.com",
                    Email = "BigTony@gmail.com",
                    FirstName = "Antonio",
                    LastName = "Raynor",
                    DisplayName = "ANIVRA"
                }, "Abc&123");
            }
            //Now that we have both a Role and a user, we need to associate the two
            var userId2 = userManager.FindByEmail("BigTony@gmail.com").Id;
            userManager.AddToRole(userId, "Moderator");

        }
    }
}
