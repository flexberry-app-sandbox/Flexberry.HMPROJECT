﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.HMPROJECT
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Показ приборов.
    /// </summary>
    // *** Start programmer edit section *** (ПоказПриборов CustomAttributes)

    // *** End programmer edit section *** (ПоказПриборов CustomAttributes)
    [AutoAltered()]
    [Caption("Показ приборов")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПоказПриборовE", new string[] {
            "Номер as \'Номер\'",
            "Дата as \'Дата\'",
            "М as \'М\'",
            "Т as \'Т\'",
            "П as \'П\'",
            "Q as \'Q\'",
            "ПриборыЗд as \'Приборы зд\'",
            "ПриборыЗд.Номер as \'Номер\'"}, Hidden=new string[] {
            "ПриборыЗд.Номер"})]
    [MasterViewDefineAttribute("ПоказПриборовE", "ПриборыЗд", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номер")]
    [View("ПоказПриборовL", new string[] {
            "Номер as \'Номер\'",
            "Дата as \'Дата\'",
            "М as \'М\'",
            "Т as \'Т\'",
            "П as \'П\'",
            "Q as \'Q\'",
            "ПриборыЗд.Номер as \'Номер\'"})]
    public class ПоказПриборов : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private System.DateTime fДата;
        
        private double fМ;
        
        private double fТ;
        
        private double fП;
        
        private bool fQ;
        
        private IIS.HMPROJECT.ПриборыЗд fПриборыЗд;
        
        // *** Start programmer edit section *** (ПоказПриборов CustomMembers)

        // *** End programmer edit section *** (ПоказПриборов CustomMembers)

        
        /// <summary>
        /// Q.
        /// </summary>
        // *** Start programmer edit section *** (ПоказПриборов.Q CustomAttributes)

        // *** End programmer edit section *** (ПоказПриборов.Q CustomAttributes)
        public virtual bool Q
        {
            get
            {
                // *** Start programmer edit section *** (ПоказПриборов.Q Get start)

                // *** End programmer edit section *** (ПоказПриборов.Q Get start)
                bool result = this.fQ;
                // *** Start programmer edit section *** (ПоказПриборов.Q Get end)

                // *** End programmer edit section *** (ПоказПриборов.Q Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПоказПриборов.Q Set start)

                // *** End programmer edit section *** (ПоказПриборов.Q Set start)
                this.fQ = value;
                // *** Start programmer edit section *** (ПоказПриборов.Q Set end)

                // *** End programmer edit section *** (ПоказПриборов.Q Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ПоказПриборов.Дата CustomAttributes)

        // *** End programmer edit section *** (ПоказПриборов.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ПоказПриборов.Дата Get start)

                // *** End programmer edit section *** (ПоказПриборов.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ПоказПриборов.Дата Get end)

                // *** End programmer edit section *** (ПоказПриборов.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПоказПриборов.Дата Set start)

                // *** End programmer edit section *** (ПоказПриборов.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ПоказПриборов.Дата Set end)

                // *** End programmer edit section *** (ПоказПриборов.Дата Set end)
            }
        }
        
        /// <summary>
        /// М.
        /// </summary>
        // *** Start programmer edit section *** (ПоказПриборов.М CustomAttributes)

        // *** End programmer edit section *** (ПоказПриборов.М CustomAttributes)
        public virtual double М
        {
            get
            {
                // *** Start programmer edit section *** (ПоказПриборов.М Get start)

                // *** End programmer edit section *** (ПоказПриборов.М Get start)
                double result = this.fМ;
                // *** Start programmer edit section *** (ПоказПриборов.М Get end)

                // *** End programmer edit section *** (ПоказПриборов.М Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПоказПриборов.М Set start)

                // *** End programmer edit section *** (ПоказПриборов.М Set start)
                this.fМ = value;
                // *** Start programmer edit section *** (ПоказПриборов.М Set end)

                // *** End programmer edit section *** (ПоказПриборов.М Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (ПоказПриборов.Номер CustomAttributes)

        // *** End programmer edit section *** (ПоказПриборов.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (ПоказПриборов.Номер Get start)

                // *** End programmer edit section *** (ПоказПриборов.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (ПоказПриборов.Номер Get end)

                // *** End programmer edit section *** (ПоказПриборов.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПоказПриборов.Номер Set start)

                // *** End programmer edit section *** (ПоказПриборов.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (ПоказПриборов.Номер Set end)

                // *** End programmer edit section *** (ПоказПриборов.Номер Set end)
            }
        }
        
        /// <summary>
        /// П.
        /// </summary>
        // *** Start programmer edit section *** (ПоказПриборов.П CustomAttributes)

        // *** End programmer edit section *** (ПоказПриборов.П CustomAttributes)
        public virtual double П
        {
            get
            {
                // *** Start programmer edit section *** (ПоказПриборов.П Get start)

                // *** End programmer edit section *** (ПоказПриборов.П Get start)
                double result = this.fП;
                // *** Start programmer edit section *** (ПоказПриборов.П Get end)

                // *** End programmer edit section *** (ПоказПриборов.П Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПоказПриборов.П Set start)

                // *** End programmer edit section *** (ПоказПриборов.П Set start)
                this.fП = value;
                // *** Start programmer edit section *** (ПоказПриборов.П Set end)

                // *** End programmer edit section *** (ПоказПриборов.П Set end)
            }
        }
        
        /// <summary>
        /// Т.
        /// </summary>
        // *** Start programmer edit section *** (ПоказПриборов.Т CustomAttributes)

        // *** End programmer edit section *** (ПоказПриборов.Т CustomAttributes)
        public virtual double Т
        {
            get
            {
                // *** Start programmer edit section *** (ПоказПриборов.Т Get start)

                // *** End programmer edit section *** (ПоказПриборов.Т Get start)
                double result = this.fТ;
                // *** Start programmer edit section *** (ПоказПриборов.Т Get end)

                // *** End programmer edit section *** (ПоказПриборов.Т Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПоказПриборов.Т Set start)

                // *** End programmer edit section *** (ПоказПриборов.Т Set start)
                this.fТ = value;
                // *** Start programmer edit section *** (ПоказПриборов.Т Set end)

                // *** End programmer edit section *** (ПоказПриборов.Т Set end)
            }
        }
        
        /// <summary>
        /// Показ приборов.
        /// </summary>
        // *** Start programmer edit section *** (ПоказПриборов.ПриборыЗд CustomAttributes)

        // *** End programmer edit section *** (ПоказПриборов.ПриборыЗд CustomAttributes)
        [PropertyStorage(new string[] {
                "ПриборыЗд"})]
        [NotNull()]
        public virtual IIS.HMPROJECT.ПриборыЗд ПриборыЗд
        {
            get
            {
                // *** Start programmer edit section *** (ПоказПриборов.ПриборыЗд Get start)

                // *** End programmer edit section *** (ПоказПриборов.ПриборыЗд Get start)
                IIS.HMPROJECT.ПриборыЗд result = this.fПриборыЗд;
                // *** Start programmer edit section *** (ПоказПриборов.ПриборыЗд Get end)

                // *** End programmer edit section *** (ПоказПриборов.ПриборыЗд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПоказПриборов.ПриборыЗд Set start)

                // *** End programmer edit section *** (ПоказПриборов.ПриборыЗд Set start)
                this.fПриборыЗд = value;
                // *** Start programmer edit section *** (ПоказПриборов.ПриборыЗд Set end)

                // *** End programmer edit section *** (ПоказПриборов.ПриборыЗд Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПоказПриборовE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПоказПриборовE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПоказПриборовE", typeof(IIS.HMPROJECT.ПоказПриборов));
                }
            }
            
            /// <summary>
            /// "ПоказПриборовL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПоказПриборовL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПоказПриборовL", typeof(IIS.HMPROJECT.ПоказПриборов));
                }
            }
        }
    }
}
