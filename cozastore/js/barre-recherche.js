function rechercherProduit()
{
	var texte = document.getElementById("date");

	if(rechercher.blabla.value == "")
	{
		alert("Merci de renseigner le champ");
		return false;
	}
	else
	{
		if(!isNaN(rechercher.blabla.value))
		{
			alert("Le nom du produit doit être une chaîner de caractères");
			return false;
		}
		else
		{
            alert("Texte récupéré");
                return true;
		}
	}
}