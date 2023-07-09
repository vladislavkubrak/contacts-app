export interface IContent {
	[key: string]: {
		screens: {
			Contacts: {
				title: string;
			},
			NewContact: {
				title: string;
				leftTitle: string;
				rightTitle: string;
				placeholders: {
					name: string;
					surname: string;
					phone: string;
				}
			},
			Contact: {
				title: string;
				cancelTitle: string;
				editTitle: string;
				doneTitle: string;
				messageTitle: string;
				deleteTitle: string;
				buttonDelete: {
					confirmText: string;
					cancelText: string;
				}
			},
			Chat: {
				inputPlaceholder: string;
			}
		}
	};
}

export const content: IContent = {
	"en": {
		screens: {
			Contacts: {
				title: "Contacts"
			},
			NewContact: {
				title: "New Contact",
				leftTitle: "Cancel",
				rightTitle: "Done",
				placeholders: {
					name: "Name",
					surname: "Surname",
					phone: "Phone",
				}
			},
			Contact: {
				title: "Contact",
				cancelTitle: "Cancel",
				editTitle: "Edit",
				doneTitle: "Done",
				messageTitle: "message",
				deleteTitle: "delete",
				buttonDelete: {
					confirmText: "Delete Contact",
					cancelText: "Cancel",
				},
			},
			Chat: {
				inputPlaceholder: "Text Message"
			}
		}
	},
	"fr": {
		screens: {
			Contacts: {
				title: "Contacts"
			},
			NewContact: {
				title: "Nouveau Contact",
				leftTitle: "Annuler",
				rightTitle: "Terminé",
				placeholders: {
					name: "Nom",
					surname: "Prénom",
					phone: "Téléphone",
				}
				
			},
			Contact: {
				title: "Contact",
				cancelTitle: "Annuler",
				editTitle: "Modifier",
				doneTitle: "Terminé",
				messageTitle: "message",
				deleteTitle: "supprimer",
				buttonDelete: {
					confirmText: "Supprimer le contact",
					cancelText: "Annuler",
				}
			},
			Chat: {
				inputPlaceholder: "Message Texte"
			}
		}
	},
}