package com.ifisolution.chesstournament.dto;


import lombok.Data;

import java.util.Date;

@Data
public class BaseResponse<T> {

    private T data;
    private Status status;
    private Date timestamp;

}
