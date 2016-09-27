package bartender;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.math.BigDecimal;

import org.junit.Test;

public class BartenderTest {
	@Test
	public void should_charge_9_99_for_a_mockito() {
		// Arrange
		Bartender bartender = new Bartender();
		
		// Act
		BigDecimal cost = bartender.makeADrink("mockito");
		
		// Assert
		assertThat(cost, is(new BigDecimal(9.99)));
	}
}
