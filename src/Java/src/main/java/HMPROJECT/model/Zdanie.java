package HMPROJECT.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HMPROJECT.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Здание
 */
@Entity(name = "IISHMPROJECTЗдание")
@Table(schema = "public", name = "Здание")
public class Zdanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Адрес")
    private Integer адрес;

    @Column(name = "Улица")
    private String улица;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "CHelovek")
    @Convert("CHelovek")
    @Column(name = "Человек", length = 16, unique = true, nullable = false)
    private UUID _chelovekid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "CHelovek", insertable = false, updatable = false)
    private CHelovek chelovek;


    public Zdanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getАдрес() {
      return адрес;
    }

    public void setАдрес(Integer адрес) {
      this.адрес = адрес;
    }

    public String getУлица() {
      return улица;
    }

    public void setУлица(String улица) {
      this.улица = улица;
    }


}