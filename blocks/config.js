module.exports = [
    {
        name: "SI1145",
        blocks: [
            {
                xml:
                    `<block type="si1145">
                        <value name="SI1145SDA">
                            <shadow type="math_number">
                                <field name="NUM">21</field>
                            </shadow>
                        </value>
                        <value name="SI1145SCL">
                            <shadow type="math_number">
                                <field name="NUM">22</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="readuv">
                     </block>`
            }
        ]
    }
];