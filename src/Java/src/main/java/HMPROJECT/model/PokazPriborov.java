package HMPROJECT.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HMPROJECT.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПоказПриборов
 */
@Entity(name = "IISHMPROJECTПоказПриборов")
@Table(schema = "public", name = "ПоказПриборов")
public class PokazPriborov {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "М")
    private Double м;

    @Column(name = "Т")
    private Double т;

    @Column(name = "П")
    private Double п;

    @Column(name = "Q")
    private Boolean q;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PriboryZd")
    @Convert("PriboryZd")
    @Column(name = "ПриборыЗд", length = 16, unique = true, nullable = false)
    private UUID _priboryzdid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PriboryZd", insertable = false, updatable = false)
    private PriboryZd priboryzd;


    public PokazPriborov() {
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

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Double getМ() {
      return м;
    }

    public void setМ(Double м) {
      this.м = м;
    }

    public Double getТ() {
      return т;
    }

    public void setТ(Double т) {
      this.т = т;
    }

    public Double getП() {
      return п;
    }

    public void setП(Double п) {
      this.п = п;
    }

    public Boolean getQ() {
      return q;
    }

    public void setQ(Boolean q) {
      this.q = q;
    }


}