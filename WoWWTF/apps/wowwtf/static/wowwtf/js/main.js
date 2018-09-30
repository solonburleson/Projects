//itemarr=[["Head", "head", 163596, "l", "hdh", "1"], ["Neck", "neck", 158075, "l"], ["Shoulders", "shoulders", 159331, "l"], ["Cloak", "cloak", 159287,"l"], ["Chest", "chest", 160619, "l"], ["Wrists", "wrists", 158353, "l"], ["Main Hand", "mh", 159653, "l"], ["Off hand", "oh", 160110, "l"], ["Hands", "hands", 159344, "r"], ["Waist", "waist", 158306, "r"], ["Legs", "legs", 159306, "r"], ["Boots", "boots", 159336, "r"], ["Ring", "ring1", 160645, "r"], ["Ring", "ring2", 159459, "r"], ["Trinket", "trink1", 159125, "r"], ["Trinket", "trink2", 159617, "r"]];
// itemarr=[["Head", "head", 159310, "l"], ["Neck", "neck", 158075, "l"], ["Shoulders", "shoulders", 159339, "l"], ["Cloak", "cloak", 160642,"l"], ["Chest", "chest", 159303, "l"], ["Wrists", "wrists", 160214, "l"], ["Main Hand", "mh", 159653, "l"], ["Off hand", "oh", 160110, "l"], ["Hands", "hands", 159321, "r"], ["Waist", "waist", 160717, "r"], ["Legs", "legs", 159345, "r"], ["Boots", "boots", 159320, "r"], ["Ring", "ring1", 158362, "r"], ["Ring", "ring2", 162548, "r"], ["Trinket", "trink1", 155881, "r"], ["Trinket", "trink2", 159614, "r"]];
// $(document).ready(function(){
gear = function(itemarr){
    console.log(itemarr)
    console.log("hi")
    $.each(itemarr, function(i, value){
        url = "https://us.api.battle.net/wow/item/"+ itemarr[i].fields.itemID +"?locale=en_US&apikey=5j42e8tcknyj6hjwcx6jpyzk2wmqeawr";
        if(itemarr[i].fields.tableloc == "l"){
            $.get(url, function(res){
                var html_str = "";
                html_str += "<th>"+ itemarr[i].fields.header +"</th>";
                html_str += "<td>";
                html_str += "<img src='https://wow.zamimg.com/images/wow/icons/medium/"+ res.icon +".jpg'>";
                html_str += "<a href='https://www.wowhead.com/item="+ res.id + "'>" + res.name + "</a></td>";
                $("#"+itemarr[i].fields.place).html(html_str);
            },"json");
        }
        else{
            $.get(url, function(res){
                var html_str = "";
                html_str += "<td>";
                html_str += "<a href='https://www.wowhead.com/item="+ res.id + "'>" + res.name + "</a>";
                html_str += "<img src='https://wow.zamimg.com/images/wow/icons/medium/"+ res.icon +".jpg'></td>";
                html_str += "<th>"+ itemarr[i].fields.header +"</th>";
                $("#"+itemarr[i].fields.place).append(html_str);
            },"json");
        }
    })
}