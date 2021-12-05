export const data={
    candidate : function(){
        this.name
        this.age
        this.marks
    }
}

export const addition={
    add: function(){
        this.sum1
        this.sum2

    }
    
}

const Data = Object.create(data)
console.log(Data.name="Gourav")
console.log(Data.age=29)
console.log(Data.marks=300)


const additions = Object.create(addition)
additions.sum1=2
additions.sum2=2
additions.result = additions.sum1+ additions.sum1
console.log(additions.result)