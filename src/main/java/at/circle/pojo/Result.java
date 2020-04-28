package at.circle.pojo;

import java.io.Serializable;

import lombok.Data;

/**
 * 共同接口返回用
 * @author hzhao
 *
 * @param <T>
 */
@Data
public class Result<T> implements Serializable {

	private String code;
	private String msg;
	private T data;

	public static <T> Result<T> convert(String code, String msg, T data) {
		return new Result<T>(code, msg, data);
	}

	private Result(String code, String msg, T data) {
		this.code = code;
		this.msg = msg;
		this.data = data;
	}
}
