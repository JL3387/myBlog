﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Web;

namespace myBlog.Helpers
{
    public static class UserHelpers
    {
        //public static string GetDisplayName(this IPrincipal usr)
        //{
        //    var DisplayNameClaim = ((ClaimsIdentity).User.Identity).FindFirst("DisplayName");

        //    if (DisplayNameClaim != null)
        //        return DisplayNameClaim.Value;

        //    return "";

        //}
        public static string GetDisplayName(this IIdentity user)
    }
}