using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(myBlog.Startup))]
namespace myBlog
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
