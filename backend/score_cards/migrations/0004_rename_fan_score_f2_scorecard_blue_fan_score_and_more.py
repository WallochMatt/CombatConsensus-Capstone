# Generated by Django 4.0.4 on 2022-12-02 22:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('score_cards', '0003_remove_scorecard_number_of_rounds'),
    ]

    operations = [
        migrations.RenameField(
            model_name='scorecard',
            old_name='fan_score_f2',
            new_name='blue_fan_score',
        ),
        migrations.RenameField(
            model_name='scorecard',
            old_name='fan_score_f1',
            new_name='red_fan_score',
        ),
    ]