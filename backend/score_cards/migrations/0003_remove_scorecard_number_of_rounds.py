# Generated by Django 4.0.4 on 2022-11-29 21:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('score_cards', '0002_scorecard_number_of_rounds'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='scorecard',
            name='number_of_rounds',
        ),
    ]
