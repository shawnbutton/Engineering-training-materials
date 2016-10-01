package romannumeralcalculator;

import static java.text.MessageFormat.format;
import static java.util.Arrays.asList;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;

import java.util.Collection;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

@RunWith(Parameterized.class)
public class RomanNumeralCalculator2Test {
	private int input;
	private String expected;

	@Parameters
	public static Collection<Object[]> testData() {
		return asList(new Object[][] {
			{ 1, "I" },
			{ 2, "II" },
			{ 3, "III" },
			// ...
			{ 3000, "MMM" },
		});
	}

	public RomanNumeralCalculator2Test(int input, String expected) {
		super();
		this.input = input;
		this.expected = expected;
	}

	@Test
	public void transformed_input_should_equal_expected() {
		assertThat(message(), process(), is(expected));
	}

	private String message() {
		return format("Should convert {0} to {1}", input, expected);
	}

	private String process() {
		return RomanNumeralCalculator2.convert(input);
	}
}
