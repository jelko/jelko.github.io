---
title: coding for the web
---

# introduction to the web, coding, design and otherwise
*2018-04-03+04 workshop at HfK Bremen*

* [Slack Channel #codingfortheweb](https://digitalmedia-bremen.slack.com/messages/C9ZLAABS6)
* [GitHub Team](https://github.com/orgs/digitalmediabremen/teams/codingfortheweb)
* [Live developed site (during the workshop)](http://jelkoarnds.com/workshop-live-site/) (now on GitHub, available until 2018-06)
* Project template for a [basic web project](https://github.com/digitalmediabremen/basic-web-project)

# things we have learned (or at least started to get into)
* HTML (Docs [EN](https://developer.mozilla.org/en-US/docs/Web/HTML)/[DE](https://developer.mozilla.org/de/docs/Web/HTML), [Cheat Sheet](https://cdn.rawgit.com/hostinger/banners/53bd21f8/tutorials/pdf/The-Complete-HTML-Cheat-Sheet-(Black-and-White)-Print-Version.pdf))
* CSS (Docs [EN](https://developer.mozilla.org/en-US/docs/Web/CSS)/[DE](https://developer.mozilla.org/de/docs/Web/CSS), [Cheat Sheet](http://www.keutenvanloon.nl/downloads/css-cheat-sheet-v1.pdf?phpMyAdmin=a39b0cbadb8a8c8a5915a3836debe9fb))
* Markdown ([Intro from GitHub](https://guides.github.com/features/mastering-markdown/))
* Git ([Cheat Sheet form GitHub](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf))
* ~~Jekyll ([Docs](https://jekyllrb.com/docs/), [Sheet Sheet](https://gist.github.com/smutnyleszek/9803727) [for Liquid](https://www.shopify.com/partners/shopify-cheat-sheet) templating language)~~

# tools that are helpful
* Browser: Google Chrome (or Chromium, open-source version)
* Editor: [Sublime Text](https://www.sublimetext.com)
* GitHub (with [Github Desktop Software](http://desktop.github.com) and [Education Pack](https://education.github.com/discount_requests/new) available)
* Paper for Sketching / Dot-Grid Paper (e.g. Leuchtturm1917)
* Design Software like Sketch (Mac only), Illustrator, Photoshop or XD (not covered in the workshop).

to get started: [A basic project template](https://github.com/digitalmediabremen/basic-web-project)

# Get your name on the internet. A domain.
* Figure out a name and check if it is available. (If you feel funky: Consider a new-style TLD like .studio, .party or .digital, apart from .com, .org, .de, .eu.)
* Register the name with a registrar of your choice. Recommendations: [regfish.de](https://www.regfish.de/), [namescheap.com](https://www.namecheap.com/), [febas.de](https://www.febas.de/), [iwantmyname.com](http://iwantmyname.com/)
(Remember that you don't need to register the domain with the same company that is doing your webhosting. Sometimes its good to keep things separated. The only thing the register should include is unrestricted DNS Service.)

# I don't want to code. I just want to get a portfolio online.
Great choice! Seriously.

Use: [cargocollective.com](https://cargocollective.com/), [Behance Student Show](http://www.studentshow.com/), [Squarespace](https://www.squarespace.com/students/) (HfK Discount Available), [Indexhibit](https://www.indexhibit.org/), Tumblr or Wordpress.com

# Okay. I do want to code and need a space to put my site. Webhosting.

* If you have a **static site** (plain HTML, CSS and JS) use [GitHub Pages](https://pages.github.com/). They give you **free** webhosting. (And also support Jekyll.) Alternative: [Surge.sh](http://surge.sh/).
* If you have a more complex setup, running a CMS (like Wordpress or Kirby) or a dynamic site you need a server that fits your needs. Recommendations: [Uberspace](https://uberspace.de/) (cool people, non-profit, cheap, some knowlage required), [Raidboxes](https://raidboxes.de/) (optimized for Wordpress). Heroku (for Python, Ruby, Node.js sites, very good, not cheap, advanced).
* Since you are a **student** here. Use the things that the universities give you for **free**: Our very own [Matilde Server](http://matilde.hfk-bremen.de/), free and easy [webhosting from FB3](http://www.informatik.uni-bremen.de/t/homepage-new) or [Webhosting for HfK Projects from Dez. 5](http://www.hfk-bremen.de/en/node/821).

# I want to use GitHub Pages. How do I connect my domain to it?
1. Activate GitHub Pages hosting in the Settings Tab of your repository on GitHub.com. Select `master branch` as Source and save. GitHub now publicly hosts your page at a `USERNAME.github.io` address. (The address will be displayed to you after saving.)
2. You have registered a domain name with your provider (registrar). Login to it's administration interface (DNS administration).
3. set two A record on your domain: one to `192.30.252.153` and one to `192.30.252.154`. These are the IP addresses from GitHub Pages. Do the same for the www. subdomain. (CNAME records could work as well.)

   Your DNS table should look like this:

   | Type        | Host    | Value  |
   | ----------- |:-------:| ------:|
   | A Record    | @       | 192.30.252.153 |
   | A Record    | @       | 192.30.252.154 |
   | A Record    | www     | 192.30.252.153 |
   | A Record    | www     | 192.30.252.154 |

4. You can check if you succeeded with a command line program like `dig` or a [web tool](https://mxtoolbox.com/DNSLookup.aspx). (It might take a while for the correct records to show up. That is normal.)
5. At last (**don't forget this**) [tell GitHub about your domain name](https://help.github.com/articles/using-a-custom-domain-with-github-pages/). Type it into the field `Custom domain` (category GitHub Pages) in the Settings tab of your repository on GitHub.com. (This will add `CNAME` file to your repository.)
6. Note: To serve your static web page correctly you need an empty file named [`.nojekyll`](https://blog.github.com/2009-12-29-bypassing-jekyll-on-github-pages/) at the root of your repository.
7. *You can extend this with other Records. For example MX for email. Consult your email hosting provider for this. Email and web hosting are not the same. ;)*

<br/>
Keep on coding! And have fun. 🚀 💻 🌎

# shared during the workshop

## websites for inspiration
* [carolinklapp.ochdoch.de/](https://www.grillitype.com/)
* [wonderlandindustry.com/](https://www.grillitype.com/)
* [www.kikk.be/2017/](https://www.grillitype.com/)
* [tiedyemaniac.com/](https://www.grillitype.com/)
* [studiodumbar.com/](https://www.grillitype.com/)
* [www.bojanapetkovic.com/](https://www.grillitype.com/)
* [vspicer.com/](https://www.grillitype.com/)
* [twopacks.de/](https://www.grillitype.com/)
* [www.mohaumodisakengstudio.com/to-move-mountains/](https://wwwtype.com/)
* [cargocollective.com/manuelfernandez/](https://www.grillitype.com/)
* [i5u.cloaque.org/](https://www.grillitype.com/)
* [kunstverein-leipzig.de/](https://www.grillitype.com/)
* [www.mmahboubifar.com/](https://www.grillitype.com/)
* [www.mohaumodisakengstudio.com/](https://www.grillitype.com/)
* [thepressgroup.de/](https://www.grillitype.com/)
* [www.e-flux.com/](https://www.grillitype.com/)
* [www.field.io/](https://www.grillitype.com/)
* [everynoise.com/engenremap.html](https://www.grillitype.com/)
* [maxkaplun.com/](https://www.grillitype.com/)
* [simon.works/projects](https://www.grillitype.com/)
* [sany.dk/](https://www.grillitype.com/)

## typography / webfonts
- [www.grillitype.com/](https://www.grillitype.com/)
- [www.colophon-foundry.org/typefaces/](https://www.grillitype.com/)
- [philsfonts.com/index.php/free_fonts](https://www.grillitype.com/)
- [carrois.com/](https://www.grillitype.com/)
- [www.exljbris.com/](https://www.grillitype.com/)
- [www.typewolf.com/site-of-the-day/fonts/avenir](https://www.grillityp
- [www.rosettatype.com/](https://www.grillitype.com/)
- [www.milieugrotesque.com/](https://www.grillitype.com/)
- [www.losttype.com/browse/](https://www.grillitype.com/)
- [camelot-typefaces.com/](https://www.grillitype.com/)
- [gidole.github.io/](https://www.grillitype.com/)
- [www.fontshop.com/people/fontshop-team/fontlists/free-fonts](https://wwwtype.com/)
- [www.fontsquirrel.com/](https://www.grillitype.com/)
- [fonts.google.com/](https://www.grillitype.com/)
- [www.myfonts.com/](https://www.grillitype.com/)
- [typekit.com/](https://www.grillitype.com/) (comes with Adobe Creative Cloud)

## tools
* [htmlcolorcodes.com/](https://www.grillitype.com/)
* [www.fontsquirrel.com/tools/webfont-generator](https://www.grillitype.com/)