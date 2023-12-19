package HMPROJECT.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HMPROJECT.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПриборУчета
 */
@Entity(name = "IISHMPROJECTПриборУчета")
@Table(schema = "public", name = "ПриборУчета")
public class PriborUcheta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Название")
    private String название;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PriboryZd")
    @Convert("PriboryZd")
    @Column(name = "ПриборыЗд", length = 16, unique = true, nullable = false)
    private UUID _priboryzdid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PriboryZd", insertable = false, updatable = false)
    private PriboryZd priboryzd;


    public PriborUcheta() {
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

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }


}