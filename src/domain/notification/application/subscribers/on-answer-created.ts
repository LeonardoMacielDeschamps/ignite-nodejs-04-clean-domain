import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { AnswerCreatedEvent } from '@/domain/forum/enterprise/events/answer-created-event'

export class OnAnswerCreated implements EventHandler {
  constructor() {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.createNewAnswerNotification.bind(this),
      AnswerCreatedEvent.name,
    )
  }

  private async createNewAnswerNotification({ answer }: AnswerCreatedEvent) {
    console.log(answer)
  }
}
