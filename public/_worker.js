// apex 域名 301 到 www；其余请求原样交给静态资源
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "astershore.com") {
      url.hostname = "www.astershore.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
