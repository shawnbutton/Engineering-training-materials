# Quality Payoff


### Our Hypothesis About Quality
We believe that producing quality software pays off eventually. 


### The Story of an Application
One of us (Shawn) worked on an application that he was really proud of. 

The original application was developed with quality in mind. The small team worked together with business, controlled their own production environment, used coninuous integration, wrote automated unit tests, and continously improved the design and processes. (It was a little like Agile, although we didn't know the word at the time).

The application provided great business value, and was very well received. In fact, it became so popular that the development team grew from three to forty. 

As the group grew something happened. To make it easier for teams to work independantly they started working on long-lived branches (months). Teams stopped writing new tests, and the existing tests all broke. It was impossible to improve the code because it made merges painful, so teams stopped improving the code. In order to work independantly teams copied chunks of code into their own modules so that they could work in isolation. 

After a few years it became extremely hard to develop new features. Beurocracy and control was added to try to improve things. Deadlines tightened. Outsourced teams were added to increase productivity. This accelerated the decline in quality.

Eventually the decision was made to rewrite the application.

Six new application teams were created to write a replacement app. A lot of money was being spent, so the teams worked against tight deadlines. Off course, the rewrite needed to be kept up with the latest business changes, so it was a moving target. And the existing application still need to be maintained, so changes were made to two systems during the rewrite.

After a couple of years the new application was complete! The old application was decommissioned (partly -- there was still some functionality that wasn't moved to the new app for some years). 

Business and users were less than happy with the new app. It was different from the old one, so a lot of retraining was necessary. There were some ways that it was better than the old app, but some ways it was worse, and you better believe business and users focused on those deficencies.

Also business wasn't happy with how long it took to add new functionality to the new system. It seems that the tight deadlines meant that IT tooks short-cuts with the design and quality of the new application. 

After just a few years the decision was made to rewrite the new application....


### The Rewrite Trap

The stor above is, unfortunately, not unusual. Many developers you speak to have similar stories of an application being allowed to degrade in quality, until development can't think of any other way to fix it other than a rewrite. In fact, we have a special word for this type of system: legacy.

Rewrites are <em>always</em> worse than you predict. We have seen this pattern many time. Often the rewrite is a partial success (although over budget), but sometimes it fails completely as you realize that the job is way larger than you had predicted. We have witnessed a rewrite failure that cost tens of millions, with nothing to show for the money.

We will talk about improving a legacy system later in this course. But what if it was possible to create and maintain an application so that it never became legacy? 

# Application Stewardship



<br><br><br><br><br><br><br><br>

![Design Stamina Graph](media/designStaminaGraph.gif)
<sub><sup>Source: https://martinfowler.com/bliki/DesignStaminaHypothesis.html</sup></sub>
## Questions

something?

```







```
