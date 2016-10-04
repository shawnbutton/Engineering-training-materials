package hitchhiker;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

import org.junit.Ignore;
import org.junit.Test;

import hitchhicker.HitchHikerGuide;
import logger.Logger;
import logger.NullLogger;

public class HitchHikerGuideTest {
	@Test
	public void should_calculate_answer() {
		// We use a NullLogger because a RealLogger throws an Exception
		Logger logger = new NullLogger();
		
		// Arrange
		HitchHikerGuide guide = new HitchHikerGuide(logger);
		
		// Act
		String answer = guide.answer();
		
		// Assert
		assertThat(answer, is("42"));
	}
	
	@Test
	public void should_log_when_calculating_with_a_custom_spy() {
		// Create a local spy class
		class SpyLogger implements Logger {
			private String message;
			
			@Override
			public void log(String message) {
				this.message = message;
			}

			public String getMessage() {
				return message;
			}
		};
		
		// Arrange
		SpyLogger spyLogger = new SpyLogger();
		HitchHikerGuide guide = new HitchHikerGuide(spyLogger);
		
		// Act
		guide.answer();
		
		// Assert
		assertThat(spyLogger.getMessage(), is("Calculating the meaning of life, the universe and everything"));
	}
	
	@Test
	public void should_log_when_calculating_with_mock() {
		// Arrange
		Logger mockLogger = mock(Logger.class);
		HitchHikerGuide guide = new HitchHikerGuide(mockLogger);
		
		// Act
		guide.answer();
		
		// Assert
		verify(mockLogger).log("Calculating the meaning of life, the universe and everything");
	}
}
