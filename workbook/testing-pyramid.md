# Types of Automated Tests

Any automated testing strategy will require the use of more than one type of test. For example, unit, componant, integration, How do you decide which type of test and how many of them you need? 

### Testing Pyramid
Mike Cohn created the <em>automated testing pyramid</em> to illustrate the types of automated tests you might use:

![Testing Pyramid](media/testing-pyramid.jpg)

### Anti-pattern Inverted Test Pyramid
It is drawn as a pyramid to illustrate the relative number of tests you should write. There should be a lot more of the tests on the bottom (unit tests) than of the tests on the top (E2E tests). We generally see an order of magnitude in difference for each of the levels. For example if you have 10 E2E tests you might have 100 integration tests and 1000 unit tests.

A common testing anti-pattern is the <em>inverted test pyramid</em>. This is when you create a lot of E2E tests, while having few or no tests at the lower levels.
This is common when automated testing is done by an external testing group. Since they don't have access to the code they have no choice but to write end-to-end tests.

### Why End-To-End Tests Are A Trap
Why is the <em>inverted test pyramid</em> an anti-pattern? It seems to be a way to create a good regression suite, and it makes sense to testers who are used to doing all of their testing through the customer-facing interface. It allows testers to create a regression suite without slowing down developers by asking them to help write tests. 