package com.ifisolution.chesstournament.enumdata;

public enum StatusData {

    SUCCESS(0, "Success"),
    FAILED(-1, "Failed");


    private Integer code;
    private String message;

    StatusData(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
