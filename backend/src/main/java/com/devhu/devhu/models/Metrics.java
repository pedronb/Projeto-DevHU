package com.devhu.devhu.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name="TB_METRICS")
public class Metrics {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    @Column
    private LocalDate date;
    @Column
    private int moment;
    @Column
    private int bpm;
    @Column
    private int systolicPressure;
    @Column
    private int diastolicPressure;

    @ManyToOne
    private User user;

    public Metrics(){
    }

    public Metrics(LocalDate date, int moment, int bpm, int systolicPressure, int diastolicPressure) {
        this.date = date;
        this.moment = moment;
        this.bpm = bpm;
        this.systolicPressure = systolicPressure;
        this.diastolicPressure = diastolicPressure;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getMoment() {
        return moment;
    }

    public void setMoment(int moment) {
        this.moment = moment;
    }

    public int getBpm() {
        return bpm;
    }

    public void setBpm(int bpm) {
        this.bpm = bpm;
    }

    public int getSystolicPressure() {
        return systolicPressure;
    }

    public void setSystolicPressure(int systolicPressure) {
        this.systolicPressure = systolicPressure;
    }

    public int getDiastolicPressure() {
        return diastolicPressure;
    }

    public void setDiastolicPressure(int diastolicPressure) {
        this.diastolicPressure = diastolicPressure;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
