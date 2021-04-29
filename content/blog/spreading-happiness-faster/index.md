---
title: Spreading Happiness (happygifs.co) Faster
date: 2013-12-19
description: a step-by-step breakdown of how to improve the front end performance of a friend's image heavy side project
image: 
tags: [Infrastructure]
---
Vegan hotdogs lead to increased performance. Believe me or not, but it’s true.

The actual story was [Joshua Mauldin](https://joshuamauldin.com/), maker of iOS apps, websites and a lover of design and I caught up at JJ Red Hot's for lunch. He created BlendConf's excellent t-shirt swag thru his [Neuedist](https://neuedist.com/) project. He told me his new playground is [happygifs.co](https://happygifs.co/)

The website serves a happiness-inspiring animated gif. Who doesn't want to share or show their happiness around the holidays? If the first load doesn't please you Scrooge McDuck, hit "Get Happier" and try again. Joshua and I talked of our mutual obsession with page speed and that it wasn't as fast as he would like. Let's see:

# Where

To test the performance of the website, we want to take measurements as close as possible to the server. This is a quick test, so we'll do our best. Geographic distance typically leads to more network hops. More hops mean a slower experience for that user, so let's find where happygifs.co lives:  

`traceroute www.happygifs.co`

shows the site hosted with DigitalOcean, whose [datacenter is in New York](https://www.digitalocean.com/community/questions/datacenters-where-are-these-located-is-there-a-plan-for-the-data-center-in-asia-singapore). Of the webpagetest.org testing locations, Virginia is the closest. Here's the median of a 5 test run:

|             | Load Time | First Byte | Start Render | [Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) |  Time  |
|------------:|:---------:|:----------:|:------------:|:-----------:|:------:|
|  First View |   3.692s  |   0.164s   |    0.590s    |     898     | 3.692s |
| Repeat View |   2.127s  |   0.125s   |    0.303s    |     540     | 2.127s |

# What

In the detailed results linked below, you'll see all the tests ran using Chrome on Cable modem speed. How did I decide to use Chrome? By consulting [the most popular browsers this quarter by Version & Platform for North America](https://gs.statcounter.com/#desktop+mobile+tablet-browser_version-na-quarterly-201304-201304-bar). Other is a combination of everything else and it likely had such a large share since I requested stats including mobile. Chrome did not have the largest individual share but combined its share was larger than IE's. Not every browser is available in every location so sometimes it's difficult to get consistent analysis.

# When

This data seems to behave as you would expect. A repeated view is faster than the first view because the browser should be caching page elements. Yet, the devil is in the details.

Look at the [individual results in the 5 test run](https://www.webpagetest.org/result/131218_JH_V8E/). In the screenshots, you'll see a different featured image on each request. Thus the runs were all first views. You should notice there's a high degree of variability in the results. The average is masking the range in page load from 1.688 to 9.178 seconds. As you look at the waterfall diagrams you should notice that the variability is happening for 2 different reasons. Either the gif is the slowest page element or the advertisements are. Unfortunately, the third-party APIs and ad delivery networks are out of Joshua's control.

# How

This whole time we've been in the weeds, let's now look at those large colored letter grades at the top. Greenlit A's all around for *Time to First Byte*, *Keep-Alive Enabled*, and *Compress Transfer*. *Compress Images* is not applicable so there's no rating, *Effective use of CDN* is an X and there's an F for *Cache static content*.

A [quick query of Netcraft](https://toolbar.netcraft.com/site_report?url=happygifs.co#last_reboot) tells us the site is running Nginx 1.2.1 so we know what web server directives to use. TTF is text so we can compress it. Add the following to */etc/nginx/nginx.conf* in *gzip_types* to cover the webf onts:

`font/opentype font/truetype application/x-font-ttf application/vnd.ms-fontobject`

The web server should have the correct MIME type to deliver the custom webfonts. Add to */etc/nginx/mime.types*

    font/opentype                 ott;
    application/font-woff         woff;
    application/x-font-ttf        ttf;
    application/vnd.ms-fontobject eot;

With the fonts served and compressed, now we tell browsers to cache all the static assets. Add these  settings like above to mime.types. They are not the most aggressive, instead, caching for a month.

    location ~* \.(css|eot|gif|ico|jpg|jpeg|jpe|js|png|svg|svgz|tif|tiff|ttf|woff)$ {
        expires 2592000s;
        add_header Pragma public;
        add_header Cache-Control "public, must-revalidate, proxy-revalidate";
    }

Now there are a few page elements that we may be able to offload from Joshua's site. We can look up if the [css and javascript libraries are available on a CDN](https://cdnjs.com/). Bootstrap may not be applicable if he's customized it. Here are the URLs to use in his link directives:


    //cdnjs.cloudflare.com/ajax/libs/animate.css/3.1.0/animate.min.css
    //netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css
    //netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js
    //cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.0/fastclick.min.js
    //cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js

Changing the application to store the gifs in Amazon's S3/Cloudfront or a [competitor](https://www.cdnplanet.com/cdns/) CDN could be the next step. With the logs from the site, we could forecast his costs to help pick a service.

# Who

The beneficiary is everyone. Faster websites make us all happy even when the content isn't animated gifs of adorable kittens frockling. A better user experience is what Google rewards in their search results. If you're a website owner it is in your best interest to care about speed.