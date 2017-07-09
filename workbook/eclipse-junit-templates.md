# Using Eclipse JUnit Templates

If you are using Eclipse we recommend setting up JUnit unit test templates:

* open up the `Preferences` dialog
* select `General` | `Java` | `Editor` | `Templates` in the left navigation pane
* press the `Import` button
* select `junit_templates.xml` file in the `katas` folder and press `Open`

You should have the following additional templates:

| Name       | What it does  |
| :---       | :---     |
| aaa	       | Declares a JUnit 4 test method with Triple-A comments: Arrange, Act, and Assert |
| at	       | Inserts the assertThat() method |
| ee	       | Inserts the body of a test case that is expecting an exception |
| eq	       | Inserts the equalTo() matcher |
| parameters | Declares a JUnit 4 test data method to provide data to a JUnit 4 parameterized test |
| test       | Declares a JUnit 4 test method |
