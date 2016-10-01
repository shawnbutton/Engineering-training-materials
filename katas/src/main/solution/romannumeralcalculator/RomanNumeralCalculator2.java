package romannumeralcalculator;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class RomanNumeralCalculator2 {

	@SuppressWarnings("serial")
	private static Map<Integer, String> roman = new HashMap<Integer, String>() {
		{
			put(1, "I");
			put(4, "IV");
			put(5, "V");
			put(9, "IX");
			put(10, "X");
			put(40, "XL");
			put(50, "L");
			put(90, "XC");
			put(100, "C");
			put(400, "CD");
			put(500, "D");
			put(900, "CM");
			put(1000, "M");
		}
	};

	public static String convert(int input) {
		String result = "";
		
		for (int key : arabicKeysInDescendingOrder()) {
			while (input >= key) {
				result += roman.get(key);
				input -= key;
			}
		}

		return result;
	}

	private static List<Integer> arabicKeysInDescendingOrder() {
		Integer[] a = roman.keySet().toArray(new Integer[0]);
		List<Integer> arabicKeys = Arrays.asList(a);
		Collections.sort(arabicKeys ,Collections.reverseOrder());
		
		return arabicKeys;
	}
}
