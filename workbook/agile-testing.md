# Agile Testing

### Testing Quadrants

To help bring clarit to the complicated subject of testing Brian Merrick created the "Testing Quadrants."
He has separated types of testing into four domains, as in the diagram below.

![Testing Quadrants](media/agile-testing.png)

Tests on the left <em>support the team</em> during development. They are used to help drive development of the product.

Tests on the right <em>critique the product</em>. They are used to verify that the product meets, and continues to meet, the requirements.

Tests on the top are <em>business facing</em>. Business can understand them, and should be interested in them.

Tests on the bottom are <em>product facing</em>. They test the product, but might not be interesting for non-technical business folks.


#### Bottom-Left - Technology-Facing Supporting Development

This is the domain of automated unit and componant tests. Your business is probably not interested in seeing these tests (although they love the confidence that comes from knowing you are writing them). They support the team because they allow the team to quickly evolve and new features to the code.
In particular Test-Driven Development (TDD) is in this quadrant. Writing code using TDD helps you think through the requirements in an incremental fashion, and having the TDD tests allows to you refactor continously to keep your code clean to allow you to move fast.

#### Top-Left - Biz Facing Supporting Development

These tests help you to clarify your understanding of the product with business. Processes like Acceptance-Test-Driven-Development (ATDD) use the clarity that comes from writing tests collaboratively to ensure that there is alignment between business and developers. You might automated some of these tests to create an automated regression suite run as part of your pipeline, but some might remain manual.

#### Bottom-Right - Technology-Facing Critiquing The Product

These tests verify that the product meets non-functional requirements such as performance, load and security. Business people probably don't want to see these tests, but, again, love to hear that you are running them. Often people will use tools to perform these tests, but this introduces an element of manual effort. Continuous Delivery requires that you include these tests as part of your pipeline.

#### Top-Right - Business-Facing Critiquing The Product

These tests verify that the product does what it should from a business and user perspective. Often manual, these tests use human intelligence to ensure the product is as good as we can create.


## Questions

1. In which quadrant would you put these tests?

	a. Unit tests written after the code is complete

	<put blank lines in here>

	b. A/B tests checking the usage of various versions of a web page in production
	
	<put blank lines in here>
	
	c. 	Integration tests checking that your application correctly calls a database

	<put blank lines in here>
	
	d. Tests ensuring that the contact of your web service is correct
	

2. 	
	
	