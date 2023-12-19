package HMPROJECT.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HMPROJECT.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПриборыЗд
 */
@Entity(name = "IISHMPROJECTПриборыЗд")
@Table(schema = "public", name = "ПриборыЗд")
public class PriboryZd {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Ммакс")
    private Double ммакс;

    @Column(name = "Ммин")
    private Double ммин;

    @Column(name = "Тмакс")
    private Double тмакс;

    @Column(name = "Тмин")
    private Double тмин;

    @Column(name = "Пмакс")
    private Double пмакс;

    @Column(name = "Пмин")
    private Double пмин;

    @Column(name = "УровеньЗаряда")
    private String уровеньзаряда;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zdanie")
    @Convert("Zdanie")
    @Column(name = "Здание", length = 16, unique = true, nullable = false)
    private UUID _zdanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zdanie", insertable = false, updatable = false)
    private Zdanie zdanie;


    public PriboryZd() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Double getМмакс() {
      return ммакс;
    }

    public void setМмакс(Double ммакс) {
      this.ммакс = ммакс;
    }

    public Double getМмин() {
      return ммин;
    }

    public void setМмин(Double ммин) {
      this.ммин = ммин;
    }

    public Double getТмакс() {
      return тмакс;
    }

    public void setТмакс(Double тмакс) {
      this.тмакс = тмакс;
    }

    public Double getТмин() {
      return тмин;
    }

    public void setТмин(Double тмин) {
      this.тмин = тмин;
    }

    public Double getПмакс() {
      return пмакс;
    }

    public void setПмакс(Double пмакс) {
      this.пмакс = пмакс;
    }

    public Double getПмин() {
      return пмин;
    }

    public void setПмин(Double пмин) {
      this.пмин = пмин;
    }

    public String getУровеньЗаряда() {
      return уровеньзаряда;
    }

    public void setУровеньЗаряда(String уровеньзаряда) {
      this.уровеньзаряда = уровеньзаряда;
    }


}