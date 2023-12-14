package _Modul_ucheta_sroka_dejjstviya_dogovora.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import _Modul_ucheta_sroka_dejjstviya_dogovora.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Услуги
 */
@Entity(name = "IIS_Modul_ucheta_sroka_dejjstviya_dogovoraУслуги")
@Table(schema = "public", name = "Услуги")
public class Uslugi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "ЗатрВрем")
    private Double затрврем;

    @Column(name = "ЕдВремени")
    private String едвремени;


    public Uslugi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Double getЗатрВрем() {
      return затрврем;
    }

    public void setЗатрВрем(Double затрврем) {
      this.затрврем = затрврем;
    }

    public String getЕдВремени() {
      return едвремени;
    }

    public void setЕдВремени(String едвремени) {
      this.едвремени = едвремени;
    }


}