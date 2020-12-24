module.exports = (sequelize,DataTypes) => {
    return sequelize.define('article',{
        title:{
            type:DataTypes.STRING(50),
            allowNull:false,        //null 허용여부
            autoIncrement: false,   //자동증가 값
            defaultValue: false     //기본값으로 지정
        },
        text:{
            type:DataTypes.STRING,//    문자
            // type:DataTypes.INTEGER   숫자
            // type:DataTypes.BOOLEAN   참,거짓
            // type:DataTypes.DATE      날짜
            allowNull:false,
        },

    },{
        timestamp:true,         //생성일자, 수정일자 컬럼을 자동으로 추가
        paranoid:true           //삭제일자 컬럼을 자동추가
    })
}