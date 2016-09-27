package hitchhicker;

import logger.Logger;

public class HitchHikerGuide {

	private Logger logger;
	
	public HitchHikerGuide(Logger logger2) {
		this.logger = logger2;
	}

	public String answer() {
	    logger.log("Calculating the meaning of life, the universe and everything");
		return "42";
	}
}
