# Types of Automated Tests

Any automated testing strategy will require the use of more than one type of test. For example, unit, componant, integration, How do you decide which type of test and how many of them you need? 

### Testing Pyramid
Mike Cohn created the <em>automated testing pyramid</em> to illustrate the types of automated tests you might use:

![Testing Pyramid](media/testing-pyramid.jpg)

### The Inverted Test Pyramid Anti-pattern
It is drawn as a pyramid to illustrate the relative number of tests you should write. There should be a lot more of the tests on the bottom (unit tests) than of the tests on the top (E2E tests). We generally see an order of magnitude in difference for each of the levels. For example if you have 10 E2E tests you might have 100 integration tests and 1000 unit tests.

A common testing anti-pattern is the <em>inverted test pyramid</em>. This is when you create a lot of E2E tests, while having few or no tests at the lower levels.
This is common when automated testing is done by an external testing group. Since they don't have access to the code they have no choice but to write end-to-end tests.

### Why End-To-End Tests Are A Trap
Why is the <em>inverted test pyramid</em> an anti-pattern? It seems to be a way to create a good regression suite, and it makes sense to testers who are used to doing all of their testing through the customer-facing interface. It allows testers to create a regression suite without slowing down developers by asking them to help write tests. 

Unfortunately there are some problems:

1. Data management is difficult. Often we don't have a dedicated environment so we run into data contention with other testing. Even if we have control over our data it is difficult to and slow to load the data for our tests.

1. Test failures are common and hard to diagnose. A complex system with many moving parts means that there are lots of places it could fail, and tracking down the failure requires searching through logs to track down the problem.

1. Tests are hard to write. E2E tests generally require a lot of set up. In addition you run into combinatorial problems. A test scenerio with <em>n</em> steps with only two choices at each would result in <em>2^n</em> possible test runs!

1. Tests are slow. E2E tests generally run many orders of magnitude slower than unit tests. To get complete test coverage could take many hours.

### Moving Testing To A Lower Level
So what's the solutions? Whenever possible move your tests down to a lower level in the pyramid. For example, rather than E2E tests through a GUI, could you perhaps write tests against a service? 

Could you write one E2E test for the happy case, and one failure test, just to ensure everything is working, and then cover the rest of the logic through unit tests?

Rather than writing integration tests, could you write one to make sure the componants integrate, and then write unit tests to cover the majority of the logic?

Whenever you write a test ask yourself <em>"Is there a way I could write this test at a lower level?"</em>

### Testing Is A Continuum
The picture above shows three layers of testing: E2E, Integration and Unit tests. In practice when you are creating your test suite (and moving tests lower!) you might find that the tests fall into many different levels, and the terms no longer apply.

For example, let's say you have an app that is composed of a Angular front-end, a Java services app with some business logic that calls back-end legacy systems. 

In each of the two tiers you will have unit tests that tightly test your logic, component or service tests that test your higher level services, and integration tests that ensure your app integrates with its dependancies. In fact for the integration tests you might have a couple of types: ones that call an actual dependancy, and ones that call a stubbed back-end. 

You're likely going to create some tests that make sure your two apps are integrating, and to move those tests lower you'll want to stub out the legacy system. 

You'll also want a few tests that call the actual legacy system, true end-to-end. Even with these tests you might stub out portions of your legacy if it is very hard to write tests for portions.

So, when you write your tests be preparded to get creative. Don't fall into the trap of just writing end-to-end through the GUI.


### Testing Done By Entire Team
Above we mentioned that sometimes the <em>inverted test pyramid</em> is a consequence of the testing done by an external test team. 
Creating a good automated test suite requires the entire team to be involved. Testers understand what to test, and developers understand how to keep a code-base clean, and how to create a framework to support quickly creating tests. Also developers who write tests will ensure that their app is testable!

