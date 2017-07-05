# Technical Debt


### Definition of Technical Debt
The <em>technical debt</em> metaphor has become common in our industry.

Here is the wikipedia definition:

<em>“A concept in programming that reflects the extra development work that arises when code that is easy to implement in the short run is used instead of applying the best overall solution - Wikipedia” </em>

The metaphor was created by Ward Cunningham, the inventor of the wiki, and one of the creators of <em>extreme programming</em>. 

Here is Ward's definition:

<em>“When taking short cuts and delivering code that is not quite right for the programming task of the moment, a development team incurs Technical Debt. This debt decreases productivity. This loss of productivity is the interest of the Technical Debt - Ward Cunningham”</em>

Our definition is much simpler:
<em>"Technical debt is anything that slows you down - Declan Whelan"</em>
### The Problem With This Metaphor
We have seen the technical debt metaphor used to <em>justify</em> the creation of technical debt! The argument goes like this: "We really need to get this feature out to make this deadline! So we will create some technical debt now in order to make the date, and fix it later."

Of course after you deliver the debt-ridden code, there's another deadline, and another deadline, and you never go back and pay off the debt.
### Technical Debt Quadrants 
Martin Fowler has created a quadrant for looking at types of technical debt:
![Technical Debt Quadrants](media/techDebtQuadrant.png)
<sub><sup>Source: https://martinfowler.com/bliki/TechnicalDebtQuadrant.html</sup></sub>


The top half is <em>deliberate</em>, meaning that we choose to take on the debt. The bottom half is <em>inadvertent</em>, meaning we can't avoid it.

The Left side is <em>reckless</em>, and the right side is <em>prudent</em>.

Ward's original definition of <em>technical debt</em> referred to the <em>prudent/inadvertent</em> quadrant. It is inevitable that we create some technical debt as we write code. It becomes prudent if we go back and fix the problems afterwards!


## Questions

What are some examples of technical debt (things that slow you down)?

```








```

How do you decide if taking on deliberate technical debt is prudent or reckless?

```







```

What are some arguments we can make when our business people insist that we continually need to take on technical debt to make deadlines?

```







```

What are some examples you have seen of these types of technical debt?

```
Reckless/Deliberate





Prudent/Deliberate





Reckless/Inadvertent





Prudent/Inadvertent






```


