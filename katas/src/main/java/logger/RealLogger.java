package logger;

public class RealLogger implements Logger {

	@Override
	public void log(String string) {
		throw new RuntimeException("Doh! You used a real logger rather than a test double");
	}
}
