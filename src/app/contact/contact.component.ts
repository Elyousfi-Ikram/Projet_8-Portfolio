import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

type MessageStatusType = '' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    sujet: '',
    message: ''
  };

  messageStatus: { text: string; type: MessageStatusType } = { text: '', type: '' };
  isLoading = false;

  // EmailJS configuration (same values as in your React code)
  private readonly serviceId = 'service_evmh05b';
  private readonly templateId = 'template_1i79qsx';
  private readonly publicKey = 'Zl8XCFsIOYRw5ZUlo';

  private showMessage(text: string, type: MessageStatusType) {
    this.messageStatus = { text, type };
    setTimeout(() => (this.messageStatus = { text: '', type: '' }), 5000);
  }

  private resetForm() {
    this.formData = { name: '', email: '', sujet: '', message: '' };
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    this.isLoading = true;

    try {
      await emailjs.send(
        this.serviceId,
        this.templateId,
        {
          name: this.formData.name,
          email: this.formData.email,
          sujet: this.formData.sujet,
          message: this.formData.message
        },
        this.publicKey
      );

      this.showMessage('Message envoyé avec succès !', 'success');
      this.resetForm();
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      this.showMessage("Une erreur s'est produite. Veuillez réessayer.", 'error');
    } finally {
      this.isLoading = false;
    }
  }
}